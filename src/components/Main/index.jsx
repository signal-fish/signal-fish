import styled from "styled-components";
import Categories from "../Categories";
import Portfolios from "../Portfolios";
import Pagination from "../Pagination";
import { useTranslation } from "react-i18next";
import { AiFillProject } from "react-icons/ai";
import { mobile, tablet, tabletPro } from "../../responsive";

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
  scrollItem,
}) => {
  const { t } = useTranslation();

  return (
    <Container>
      <ProjectWrapper>
        <ProjectIcon>
          <AiFillProject />
        </ProjectIcon>
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
  position: relative;

  ${mobile({
    flex: "none",
  })}
`;

const ProjectWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-top: 20px;
  min-height: 45px;
  margin-left: 20px;

  ${mobile({
    flex: "none",
  })}
`;

const ProjectIcon = styled.div`
  color: white;
  font-size: 28px;
  display: flex;
  align-items: center;
  margin-right: 5px;

  ${tabletPro({
    fontSize: "26px",
    marginTop: "5px",
  })}

  ${tablet({
    fontSize: "22px",
    marginBottom: "3px",
  })}

  ${mobile({
    fontSize: "28px",
    marginBottom: "3px",
  })}
`;

const Title = styled.h1`
  font-family: "poppins", sans-serif;
  font-family: "Noto Sans SC", sans-serif;
  font-size: 30px;
  padding: 0;
  margin: 0;
  color: #fff;

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
  margin-left: 20px;
`;

const Hr = styled.hr`
  border: none;
  height: 2px;
  width: 200px;
  background: #fff;
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