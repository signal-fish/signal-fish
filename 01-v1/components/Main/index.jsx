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
  setSearchTerm,
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
      <SearchForm>
        <Input
          placeholder={t("Main.SearchFormPlaceholder")}
          onChange={(event) => setSearchTerm(event.target.value)}
        ></Input>
      </SearchForm>
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
  transition: 0.6s;

  background: ${(props) => props.theme.body};
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
  color: ${(props) => props.theme.fontColor};
  font-size: 32px;
  display: flex;
  align-items: center;
  margin-right: 5px;
  transition: .6s;

  ${tabletPro({
    fontSize: "28px",
    marginTop: "5px",
  })}

  ${tablet({
    marginBottom: "3px",
  })}

  ${mobile({
    fontSize: "30px",
    marginBottom: "3px",
  })}
`;

const Title = styled.h1`
  font-family: "poppins", sans-serif;
  font-family: "Noto Sans SC", sans-serif;
  font-size: 30px;
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.fontColor};
  transition: 0.6s;

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
  background: ${(props) => props.theme.fontColor};
  text-align: left;
  margin-top: 8px;
  margin-left: 0;
  transition: 0.6s;

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

const SearchForm = styled.div`
  margin: 35px 0 -5px 20px;

  ${mobile({
    margin: "25px 20px 0 20px",
  })}
`;

const Input = styled.input`
height: 50px;
width: calc(100% - 23px);
padding: 0 10px;
font-size: 22px;
border: none;
background: ${props => props.theme.searchFormBg};
color: ${props => props.theme.searchFormTextColor};

${mobile({
height: "40px",
fontSize: "20px",
})}
`
export default Main;
