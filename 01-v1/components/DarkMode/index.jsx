import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode = ({ theme, themeToggler }) => {
  return (
    <Container>
      <Wrapper onClick={themeToggler}>
        <Left>
          <FaMoon />
        </Left>
        <Right>
          <FaSun />
        </Right>
        <Circle currentTheme={theme}></Circle>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100px;
  height: 18px;
  position: fixed;
  z-index: 999;
  left: 3px;
  top: 3px;
  display: flex;
  justify-content: flex-start
`;

const Wrapper = styled.div`
  width: 38px;
  height: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 4px solid ${(props) => props.theme.darkModeBtnColor};
  border-radius: 30px;
  cursor: pointer;
  position: relative;
`;

const Left = styled.div`
  color: ${(props) => props.theme.darkModeIconColor};
  font-size: 14px;
  margin-top: 3px;
`;

const Right = styled.div`
  color: ${(props) => props.theme.darkModeIconColor};
  font-size: 16px;
  margin-top: 3px;
`;

const Circle = styled.div`
  position: absolute;
  background: ${(props) => props.theme.darkModeBtnColor};
  width: 20px;
  height: 20px;
  left: -1px;
  top: -1px;
  border-radius: 50%;
  transition: 0.6s;
  transform: ${(props) =>
    props.currentTheme === "light" ? "translateX(0)" : "translateX(100%)"};
`;
export default DarkMode;
