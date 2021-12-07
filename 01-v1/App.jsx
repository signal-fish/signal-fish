import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import DarkMode from "./components/DarkMode";
import Languages from "./components/Languages";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import data from "./data";
import i18next from "i18next";
import { mobile, LargeVersion } from "./responsive";
import { lightTheme, darkTheme } from "./themes.js";

const allCategories = [
  "All",
  ...new Set(data.map((portfolio) => portfolio.category)),
];

const getStorageTheme = () => {
  let theme = "dark-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const App = () => {
  const [categories] = useState(allCategories);
  const [portfolios, setPortfolios] = useState(data);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState(getStorageTheme());

  const portfoliosPerPage = 12;
  const pageCount = Math.ceil(portfolios.length / portfoliosPerPage);

  // filter portfolios if current portfolios or searchTerm changed
  useEffect(() => {
    const filterPortfolios = (category) => {
      if (searchTerm === "") {
        if (category === "All") {
          setPortfolios(data);
          return;
        }
        const newPortfolios = data.filter(
          (portfolio) => portfolio.category === category
        );
        setPortfolios(newPortfolios);
      } else {
        if (category === "All") {
          setPortfolios(
            data.filter((item) =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
          );
          return;
        }
        const newPortfolios = data
          .filter((portfolio) => portfolio.category === category)
          .filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
        setPortfolios(newPortfolios);
      }
    };
    filterPortfolios(currentCategory);
  }, [currentCategory, searchTerm]);

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

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <Wrapper>
          <DarkMode theme={theme} themeToggler={themeToggler} />
          <Languages handleChange={handleChange} />
          <Sidebar theme={theme} />
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
            setSearchTerm={setSearchTerm}
          />
        </Wrapper>
      </Container>
    </ThemeProvider>
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
  max-width: 1800px;
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
