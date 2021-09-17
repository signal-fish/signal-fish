import styled from "styled-components";
import { mobile, tablet, tabletPro, laptop, laptopPro } from "../../responsive";

const Categories = ({
  categories,
  setCurrentCategory,
  currentCategory,
}) => {
  const changeCategory = (category) => {
    setCurrentCategory(category);
    const firstItem = document.getElementById("firstItem");
    firstItem.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <Container>
      {categories.map((category, index) => {
        return (
          <Button
            self={category}
            currentCategory={currentCategory}
            type="button"
            key={index}
            onClick={() => {
              changeCategory(category);
            }}
          >
            {category}
          </Button>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  min-height: 130px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  align-items: center;

  ${tabletPro({
    minHeight: "100px",
  })}

  ${mobile({
    minWidth: "100vw"
  })}
`;

const Button = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  text-transform: uppercase;
  background: transparent;
  border-color: transparent;
  font-size: 28px;
  letter-spacing: 1px;
  padding: 10px 20px;
  border-radius: 5px;

  background: ${(props) =>
    props.self === props.currentCategory &&
    "linear-gradient(to bottom right, lightskyblue, lightgreen)"};
  box-shadow: ${(props) =>
    props.self === props.currentCategory && "1px 1px 3px rgba(0, 0, 0, 0.8)"};

  &:hover {
    background: ${(props) =>
      props.self !== props.currentCategory &&
      "linear-gradient(to bottom right, lightskyblue, lightgreen)"};
    box-shadow: ${(props) =>
      props.self !== props.currentCategory && "1px 1px 3px rgba(0, 0, 0, 0.8)"};
  }

  ${laptopPro({
    fontSize: "25px",
    padding: "10px 15px",
  })}

  ${laptop({
    fontSize: "23px",
  })}

  ${tabletPro({
    fontSize: "20px",
    padding: "8px 12px",
  })}

  ${tablet({
    fontSize: "16px",
    padding: "10px 10px",
    marginBottom: "8px",
  })}

  ${mobile({
    fontSize: "18px",
    padding: "10px 10px",
  })}
`;

export default Categories;
