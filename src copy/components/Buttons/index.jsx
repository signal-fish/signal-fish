import styled from "styled-components";
import { mobile, tablet, tabletPro, laptop } from "../../responsive";

const Buttons = ({
  portfolios,
  currentPageNumber,
  setCurrentPageNumber,
  portfoliosPerPage,
  generateArray,
}) => {
  const pageCount = Math.ceil(portfolios.length / portfoliosPerPage);

  const changePage = (currentPageNumber) => {
    setCurrentPageNumber(currentPageNumber)
    const firstItem = document.getElementById("firstItem");
    firstItem.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <Container>
      {pageCount <= 5 &&
        generateArray(0, pageCount).map((num) => (
          <Button
            currentPageNumber={currentPageNumber}
            selfPageNumber={num}
            key={num}
            onClick={() => {changePage(num)}}
          >
            {num + 1}
          </Button>
        ))}
      {pageCount > 5 &&
        currentPageNumber <= 2 &&
        generateArray(0, 5).map((num) => (
          <Button
            currentPageNumber={currentPageNumber}
            selfPageNumber={num}
            key={num}
            onClick={() => setCurrentPageNumber(num)}
          >
            {num + 1}
          </Button>
        ))}
      {pageCount > 5 &&
        currentPageNumber + 2 >= pageCount &&
        generateArray(pageCount - 5, pageCount).map((num) => (
          <Button
            currentPageNumber={currentPageNumber}
            selfPageNumber={num}
            key={num}
            onClick={() => setCurrentPageNumber(num)}
          >
            {num + 1}
          </Button>
        ))}
      {pageCount > 5 &&
        currentPageNumber > 2 &&
        currentPageNumber + 2 < pageCount &&
        generateArray(currentPageNumber - 2, currentPageNumber + 3).map(
          (num) => (
            <Button
              currentPageNumber={currentPageNumber}
              selfPageNumber={num}
              key={num}
              onClick={() => setCurrentPageNumber(num)}
            >
              {num + 1}
            </Button>
          )
        )}
    </Container>
  );
};

const Container = styled.div`
`;

const Button = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  margin: 0 10px;
  font-size: 25px;
  min-height: 50px;
  width: 55px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  font-size: 23px;

  background: ${(props) =>
    props.selfPageNumber === props.currentPageNumber ?
    "linear-gradient(to bottom right, lightskyblue, lightgreen)" : "transparent"};
  box-shadow: ${(props) =>
    props.selfPageNumber === props.currentPageNumber &&
    "1px 1px 3px rgba(0, 0, 0, 0.6)"};
  border: ${(props) =>
    props.selfPageNumber === props.currentPageNumber && "none"};

  &:hover {
    background: ${(props) =>
      props.selfPageNumber !== props.currentPageNumber &&
      "linear-gradient(to bottom right, lightskyblue, lightgreen)"};
    box-shadow: ${(props) =>
      props.selfPageNumber !== props.currentPageNumber &&
      "1px 1px 3px rgba(0, 0, 0, 0.6)"};
    border: ${(props) =>
      props.selfPageNumber !== props.currentPageNumber && "none"};
  }
  ${laptop({
    minHeight: "45px",
    fontSize: "18px",
    padding: "5px 10px",
    width: "45px",
    margin: "0 10px",
  })}

  ${tabletPro({
    minHeight: "40px",
    fontSize: "12px",
    padding: "3px 5px",
    width: "35px",
    margin: "0 5px",
  })}

  ${tablet({
    minHeight: "30px",
    width: "26px",
    margin: "0 3px",
  })}

  ${mobile({
    minHeight: "40px",
    padding: "5px 5px",
    width: "45px",
    margin: "0 8.6px",
  })}
`;

export default Buttons;
