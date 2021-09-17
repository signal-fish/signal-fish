import styled from "styled-components";
import Buttons from "../Buttons";
import { mobile, tablet, tabletPro, laptop, laptopPro } from "../../responsive";
import { useTranslation } from "react-i18next";

const Pagination = ({
  portfolios,
  currentPageNumber,
  setCurrentPageNumber,
  portfoliosPerPage,
  generateArray,
  pageCount,
}) => {
  const { t } = useTranslation();

  const handleFirst = (currentPageNumber) => {
    if (currentPageNumber === 0) {
      return;
    }
    setCurrentPageNumber(0);
    const firstItem = document.getElementById("firstItem");
    firstItem.scrollIntoView({
      behavior: "smooth",
    });
  }

  const handlePrev = (currentPageNumber) => {
    if (currentPageNumber === 0) {
      setCurrentPageNumber(currentPageNumber);
      return;
    }
    setCurrentPageNumber(currentPageNumber - 1);
    const firstItem = document.getElementById("firstItem");
    firstItem.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleNext = (currentPageNumber, pageCount) => {
    if (currentPageNumber === pageCount - 1) {
      setCurrentPageNumber(pageCount - 1);
      return;
    }
    setCurrentPageNumber(currentPageNumber + 1);
    const firstItem = document.getElementById("firstItem");
    firstItem.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleLast = (currentPageNumber, pageCount) => {
    if (currentPageNumber === pageCount - 1) {
      return;
    }
    setCurrentPageNumber(pageCount - 1);
    const firstItem = document.getElementById("firstItem");
    firstItem.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Container id="pagination">
      <Wrapper>
        <FPWrapper>
          <FirstButton
            currentPageNumber={currentPageNumber}
            onClick={() => {
              handleFirst(currentPageNumber);
            }}
          >
            {t("Main.Pagination.first")}
          </FirstButton>
          <PrevButton
            currentPageNumber={currentPageNumber}
            onClick={() => {
              handlePrev(currentPageNumber);
            }}
          >
            {t("Main.Pagination.prev")}
          </PrevButton>
        </FPWrapper>
        <BtnsWrapper>
          <Buttons
            portfolios={portfolios}
            currentPageNumber={currentPageNumber}
            setCurrentPageNumber={setCurrentPageNumber}
            portfoliosPerPage={portfoliosPerPage}
            generateArray={generateArray}
          />
        </BtnsWrapper>
        <NLWrapper>
          <NextButton
            currentPageNumber={currentPageNumber}
            pageCount={pageCount}
            onClick={() => {
              handleNext(currentPageNumber, pageCount);
            }}
          >
            {t("Main.Pagination.next")}
          </NextButton>
          <LastButton
            currentPageNumber={currentPageNumber}
            pageCount={pageCount}
            onClick={() => {
              handleLast(currentPageNumber, pageCount);
            }}
          >
            {t("Main.Pagination.last")}
          </LastButton>
        </NLWrapper>
      </Wrapper>
    </Container>
  );
};

// used for mobile
const FPWrapper = styled.div`
  ${mobile({
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
  })}
`;
const BtnsWrapper = styled.div`
  ${mobile({
    marginBottom: "10px",
  })}
`;
const NLWrapper = styled.div`
  ${mobile({
    marginBottom: "10px",
  })}
`;

const Container = styled.div`
  flex: 1;
  margin-top: 30px;
  margin-bottom: 70px;
  min-height: 30px;

  ${tabletPro({
    marginBottom: "50px",
    // marginLeft: "-20px",
  })}

  ${mobile({
    marginBottom: "10px",
    marginTop: "-2px",
  })}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  ${mobile({
    flexDirection: "column",
    alignItems: "center",
  })}
`;

const FirstButton = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  font-size: 25px;
  margin: 0 10px;
  min-height: 50px;
  width: 120px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  font-size: 23px;

  cursor: ${(props) => props.currentPageNumber === 0 && "not-allowed"};
  background-color: ${(props) =>
    props.currentPageNumber === 0 ? "lightgray" : "transparent"};
  color: ${(props) => props.currentPageNumber === 0 && "rgba(0, 0, 0, 0.3)"};
  border: ${(props) => props.currentPageNumber === 0 && "lightgray"};

  &:hover {
    background: ${(props) =>
      props.currentPageNumber !== 0 &&
      "linear-gradient(to bottom right, lightskyblue, lightgreen)"};
    box-shadow: ${(props) =>
      props.currentPageNumber !== 0 && "1px 1px 3px rgba(0, 0, 0, 0.6)"};
    border: ${(props) => props.currentPageNumber !== 0 && "none"};
  }

  ${laptopPro({
    fontSize: "20px",
    padding: "5px 10px",
    width: "100px",
    margin: "0 10px",
  })}

  ${laptop({
    minHeight: "45px",
    width: "90px",
  })}

  ${tabletPro({
    minHeight: "40px",
    fontSize: "12px",
    padding: "3px 5px",
    width: "70px",
    margin: "0 5px",
  })}

  ${tablet({
    minHeight: "30px",
    fontSize: "10px",
    width: "60px",
  })}

  ${mobile({
    fontSize: "20px",
    padding: "10px 20px",
    width: "125px",
    margin: "0 22px",
  })}
`;

const PrevButton = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  font-size: 25px;
  margin: 0 10px;
  min-height: 50px;
  width: 120px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 5px;

  cursor: ${(props) => props.currentPageNumber === 0 && "not-allowed"};
  background-color: ${(props) =>
    props.currentPageNumber === 0 ? "lightgray" : "transparent"};
  color: ${(props) => props.currentPageNumber === 0 && "rgba(0, 0, 0, 0.3)"};
  border: ${(props) => props.currentPageNumber === 0 && "lightgray"};

  &:hover {
    background: ${(props) =>
      props.currentPageNumber !== 0 &&
      "linear-gradient(to bottom right, lightskyblue, lightgreen)"};
    box-shadow: ${(props) =>
      props.currentPageNumber !== 0 && "1px 1px 3px rgba(0, 0, 0, 0.6)"};
    border: ${(props) => props.currentPageNumber !== 0 && "none"};
  }

  ${laptopPro({
    fontSize: "20px",
    padding: "5px 10px",
    width: "100px",
    margin: "0 10px",
  })}

  ${laptop({
    minHeight: "45px",
    width: "90px",
  })}

  ${tabletPro({
    minHeight: "40px",
    fontSize: "12px",
    padding: "3px 5px",
    width: "70px",
    margin: "0 5px",
  })}

  ${tablet({
    minHeight: "30px",
    width: "60px",
  })}

  ${mobile({
    fontSize: "20px",
    padding: "10px 20px",
    width: "125px",
    margin: "0 22px",
  })}
`;

const NextButton = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  font-size: 25px;
  margin: 0 10px;
  min-height: 50px;
  width: 120px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  font-size: 23px;

  cursor: ${(props) =>
    props.currentPageNumber === props.pageCount - 1 && "not-allowed"};
  background-color: ${(props) =>
    props.currentPageNumber === props.pageCount - 1
      ? "lightgray"
      : "transparent"};
  color: ${(props) =>
    props.currentPageNumber === props.pageCount - 1 && "rgba(0, 0, 0, 0.3)"};
  border: ${(props) =>
    props.currentPageNumber === props.pageCount - 1 && "lightgray"};

  &:hover {
    background: ${(props) =>
      props.currentPageNumber !== props.pageCount - 1 &&
      "linear-gradient(to bottom right, lightskyblue, lightgreen)"};
    box-shadow: ${(props) =>
      props.currentPageNumber !== props.pageCount - 1 &&
      "1px 1px 3px rgba(0, 0, 0, 0.6)"};
    border: ${(props) =>
      props.currentPageNumber !== props.pageCount - 1 && "none"};
  }

  ${laptopPro({
    fontSize: "20px",
    padding: "5px 10px",
    width: "100px",
    margin: "0 10px",
  })}

  ${laptop({
    minHeight: "45px",
    width: "90px",
  })}

  ${tabletPro({
    minHeight: "40px",
    fontSize: "12px",
    padding: "3px 5px",
    width: "70px",
    margin: "0 5px",
  })}

  ${tablet({
    minHeight: "30px",
    width: "60px",
  })}

  ${mobile({
    fontSize: "20px",
    padding: "10px 20px",
    width: "125px",
    margin: "0 22px",
  })}
`;

const LastButton = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  font-size: 25px;
  margin: 0 10px;
  min-height: 50px;
  width: 120px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  font-size: 23px;

  cursor: ${(props) =>
    props.currentPageNumber === props.pageCount - 1 && "not-allowed"};
  background-color: ${(props) =>
    props.currentPageNumber === props.pageCount - 1
      ? "lightgray"
      : "transparent"};
  color: ${(props) =>
    props.currentPageNumber === props.pageCount - 1 && "rgba(0, 0, 0, 0.3)"};
  border: ${(props) =>
    props.currentPageNumber === props.pageCount - 1 && "lightgray"};

  &:hover {
    background: ${(props) =>
      props.currentPageNumber !== props.pageCount - 1 &&
      "linear-gradient(to bottom right, lightskyblue, lightgreen)"};
    box-shadow: ${(props) =>
      props.currentPageNumber !== props.pageCount - 1 &&
      "1px 1px 3px rgba(0, 0, 0, 0.6)"};
    border: ${(props) =>
      props.currentPageNumber !== props.pageCount - 1 && "none"};
  }

  ${laptopPro({
    fontSize: "20px",
    padding: "5px 10px",
    width: "100px",
    margin: "0 10px",
  })}

  ${laptop({
    minHeight: "45px",
    width: "88px",
  })}

  ${tabletPro({
    minHeight: "40px",
    fontSize: "12px",
    padding: "3px 5px",
    width: "70px",
    margin: "0 5px",
  })}

  ${tablet({
    minHeight: "30px",
    width: "60px",
  })}

  ${mobile({
    fontSize: "20px",
    padding: "10px 20px",
    width: "125px",
    margin: "0 22px",
  })}
`;

export default Pagination;
