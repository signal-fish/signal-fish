import styled from "styled-components";
import { useGlobalContext } from "../../context";
import { mobile, tablet, tabletPro, laptop, laptopPro } from "../../responsive";

const Categories = () => {
  const { categories, currentCategory, setCurrentCategory} =
    useGlobalContext();

  const changeCategory = (category, currentCategory) => {
    if (category !== currentCategory) {
      setCurrentCategory(category);
      const firstItem = document.getElementById("firstItem");
      if (firstItem) {
        firstItem.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

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
              changeCategory(category, currentCategory);
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
  padding-left: 20px;

  align-items: center;

  ${tabletPro({
    minHeight: "100px",
  })}

  ${mobile({
    marginTop: "10px",
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
  color: ${(props) =>
    props.self === props.currentCategory
      ? props.theme.activeBtnColor
      : props.theme.btnColor};

  background: ${(props) =>
    props.self === props.currentCategory &&
    "linear-gradient(to bottom right, lightskyblue, lightgreen)"};
  box-shadow: ${(props) =>
    props.self === props.currentCategory && "1px 1px 3px rgba(0, 0, 0, 0.8)"};

  &:hover {
    color: ${(props) =>
      props.self !== props.currentCategory && props.theme.activeBtnColor};

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
    fontSize: "16px",
    padding: "10px 10px",
  })}
`;

export default Categories;
