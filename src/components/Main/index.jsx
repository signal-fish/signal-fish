import styled from "styled-components";
import Categories from "../Categories";
import Portfolios from "../Portfolios";
import Pagination from "../Pagination";
import { useTranslation } from "react-i18next";
import { mobile, tablet, tabletPro} from "../../responsive";

const Main = ({
  categories,
  currentCategory,
  setCurrentCategory,
  portfolios,
  currentPageNumber,
  setCurrentPageNumber,
  portfoliosPerPage,
  pageCount,
  generateArray,
  scrollItem
}) => {
  const { t } = useTranslation();

  return (
    <Container>
      <ProjectWrapper>
        <Image src="assets/projects.png"></Image>
        <Title>{t("Main.ProjectName")}</Title>
      </ProjectWrapper>
      <HrWrapper>
        <Hr></Hr>
      </HrWrapper>
      <Categories
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        setCurrentPageNumber={setCurrentPageNumber}
      />
      <Portfolios
        portfolios={portfolios}
        currentPageNumber={currentPageNumber}
        portfoliosPerPage={portfoliosPerPage}
      />
      <Pagination
        portfolios={portfolios}
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
        portfoliosPerPage={portfoliosPerPage}
        generateArray={generateArray}
        pageCount={pageCount}
      />
    </Container>
  );
};

const Container = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  position: relative;

  ${mobile({
    flex: "none"
  })}
`;

const ProjectWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-top: 20px;
  min-height: 45px;

  ${mobile({
    flex:"none",
  })}
`;

const Image = styled.img`
  width: 35px;
  margin-right: 10px;

  ${tabletPro({
    width: "28px",
    marginTop: "5px",
  })}

  ${tablet({
    width: "26px",
    marginBottom: "3px",
  })}

  ${mobile({
    width: "28px",
    marginBottom: "3px",
  })}
`;

const Title = styled.h1`
  font-family: "poppins", sans-serif;
  font-family: "Noto Sans SC", sans-serif;
  font-size: 30px;
  padding: 0;
  margin: 0;

  ${tabletPro({
    fontSize: "26px",
  })}

  ${tabletPro({
    fontSize: "23px",
  })}

  ${mobile({
    fontSize: "26px",
  })}
`;

const HrWrapper = styled.div`
  min-height: 5px;
  display: flex;
  align-items: center;
`;

const Hr = styled.hr`
  border: none;
  height: 2px;
  width: 200px;
  background: #000;
  text-align: left;
  margin-top: 8px;
  margin-left: 0;

  ${tabletPro({
    width: "165px",
    marginTop: "4px",
  })}

  ${tablet({
    width: "145px",
  })}

  ${mobile({
    width: "160px",
  })}
`;

export default Main;
