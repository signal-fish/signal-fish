import styled from "styled-components";
import { mobile, tablet, tabletPro, laptop, laptopPro } from "../../responsive";

const Portfolios = ({ portfolios, currentPageNumber, portfoliosPerPage }) => {
  const portfoliosDisplayed = currentPageNumber * portfoliosPerPage;

  return (
    <Container id="projects">
      {portfolios
        .slice(portfoliosDisplayed, portfoliosDisplayed + portfoliosPerPage)
        .map((portfolio, i) => {
          const { id, title, image, webLink, sourceLink } = portfolio;
          return (
            <Wrapper id={i === 0 ? "firstItem" : ""} key={id}>
              <Portfolio image={image}>
                <Title>{title}</Title>
                <LinkContainer>
                  <Link
                    href={webLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <WebIcon
                      className="link"
                      src="assets/link.png"
                      alt="link icon"
                    ></WebIcon>
                  </Link>
                  <Link
                    href={sourceLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <SourceIcon
                      className="github"
                      src="assets/github.png"
                      alt="github icon"
                    ></SourceIcon>
                  </Link>
                </LinkContainer>
              </Portfolio>
            </Wrapper>
          );
        })}
    </Container>
  );
};

const Container = styled.div`
  flex: 22;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 330px));
  grid-template-rows: repeat(999, 1fr);
  column-gap: 50px;
  margin-left: 20px;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: lightgray;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  ${laptopPro({
    gridTemplateColumns: "repeat(3, minmax(100px, 330px))",
    columnGap: "0",
    justifyContent: "space-around",
  })}

  ${tabletPro({
    gridTemplateColumns: "repeat(2, minmax(100px, 330px))",
  })}

  ${mobile({
    flex: "none",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    margin: "10px 20px 40px 20px",
    maxHeight: "300px",
    minHeight: "300px",
    boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
  })}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Portfolio = styled.div`
  background: #000;
  border-radius: 10px;
  background: url(${(props) => props.image}) center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 300px;
  height: 185px;

  &:hover {
    box-shadow: 2px 3px 5px 1px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
    transition: 0.5s;

    & > h2 {
      opacity: 1;
    }

    & > div {
      opacity: 1;
    }
  }

  ${laptopPro({
    width: "255px",
    height: "158px",
  })}

  ${laptop({
    width: "230px",
    height: "142px",
  })}

  ${tabletPro({
    position: "relative",
    width: "240px",
    height: "148px",
    marginBottom: "50px",
  })}

  ${tablet({
    width: "210px",
    height: "130px",
    marginBottom: "50px",
  })}

  ${mobile({
    width: "288px",
    height: "178px",
    marginBottom: "50px",
  })}
`;

const Title = styled.h2`
  background: linear-gradient(
    to bottom right,
    #d8d3f5,
    #b4aed8,
    #8e87b6,
    #686091,
    #453e68
  );
  font-size: 30px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 15px 0;
  padding-bottom: 5px;
  opacity: 0;
  transition: 1s;

  ${tabletPro({
    position: "absolute",
    bottom: "-70px",
    opacity: "1",
    fontSize: "25px",
  })}

  ${tablet({
    fontSize: "22px",
    opacity: "1",
    bottom: "-60px",
  })}

  ${mobile({
    opacity: "1",
    bottom: "-65px",
    fontSize: "30px",
  })}
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0;
  transition: 1s;

  ${tabletPro({
    opacity: "0.5",
  })}
`;

const Link = styled.a`
  margin: 0 10px;
`;

const WebIcon = styled.img`
  width: 93%;

  &:hover {
    transition: 0.5s;
    opacity: 0.7;
    transform: scale(1.1);
  }

  ${tablet({
    width: "74%",
  })}

  ${mobile({
    width: "90%",
  })}
`;

const SourceIcon = styled.img`
  width: 80%;
  padding-top: 3px;
  &:hover {
    transition: 0.5s;
    opacity: 0.7;
    transform: scale(1.1);
  }

  ${tablet({
    width: "64%",
  })}

  ${mobile({
    width: "76%",
  })}
`;

export default Portfolios;
