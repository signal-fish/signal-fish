import { useEffect, useState } from "react";
import styled from "styled-components";
import Languages from "./components/Languages";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import data from "./data";
import i18next from "i18next";
import { mobile, LargeVersion } from "./responsive";

const allCategories = [
  "All",
  ...new Set(data.map((portfolio) => portfolio.category)),
];

const App = () => {
  const [categories] = useState(allCategories);
  const [portfolios, setPortfolios] = useState(data);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  const portfoliosPerPage = 12;
  const pageCount = Math.ceil(portfolios.length / portfoliosPerPage);

  const filterPortfolios = (category) => {
    if (category === "All") {
      setPortfolios(data);
      return;
    }
    const newPortfolios = data.filter(
      (portfolio) => portfolio.category === category
    );
    setPortfolios(newPortfolios);
  };

  // filter portfolios if current portfolios changed
  useEffect(() => {
    filterPortfolios(currentCategory);
  }, [currentCategory]);

  // update currentPageNumber to 0 if portfolios changed
  useEffect(() => {
    setCurrentPageNumber(0);
  }, [portfolios]);

  const handleChange = (language) => {
    i18next.changeLanguage(language);
  };

  const generateArray = (left, right) => {
    const arr = Array(right - left).fill();
    for (let i = left, j = 0; i < right; i++, j++) {
      arr[j] = i;
    }
    return arr;
  };

  return (
    <Container>
      <Wrapper>
        <Languages handleChange={handleChange} />
        <Sidebar />
        <Main
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          portfolios={portfolios}
          currentPageNumber={currentPageNumber}
          setCurrentPageNumber={setCurrentPageNumber}
          portfoliosPerPage={portfoliosPerPage}
          pageCount={pageCount}
          generateArray={generateArray}
        />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  min-height: 600px;
  position: absolute;
  max-width: 1780px;
  max-height: 1300px;

  ${LargeVersion({
    left: "50%",
    transform: "translate(-50%)",
    borderRadius: "5px",
  })}

  ${mobile({
    flexDirection: "column",
    justifyContent: "flex-start",
  })}
`;

export default App;
