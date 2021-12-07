import styled, { ThemeProvider } from "styled-components";
import DarkMode from "./components/DarkMode";
import Languages from "./components/Languages";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { mobile, LargeVersion } from "./responsive";
import { lightTheme, darkTheme } from "./themes.js";
import { useGlobalContext } from "./context";

const App = () => {
  const { theme } = useGlobalContext();
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <Wrapper>
          <DarkMode />
          <Languages />
          <Sidebar />
          <Main />
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
