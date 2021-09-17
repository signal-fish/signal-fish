import React from "react";
import styled from "styled-components";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Languages = () => {
  const { t } = useTranslation();

  const handleChange = (language) => {
    i18next.changeLanguage(language);
  };

  return (
    <Container>
      <Dropdown>
        <Button id="dropdownButton">
          <Global src="assets/global.svg" alt="global" />
          <Arrow id="arrow" src="assets/arrow.png" alt="arrow-down" />
        </Button>
        <DropdownContent id="dropdownContent">
          <Language className="language" onClick={() => handleChange("en")}>
            <Flag src="assets/icons/languages/america.svg" />
            {t("Languages.en")}
          </Language>
          <Language className="language" onClick={() => handleChange("ch")}>
            <Flag src="assets/icons/languages/china.svg" />
            {t("Languages.ch")}
          </Language>
        </DropdownContent>
      </Dropdown>
    </Container>
  );
};

const Container = styled.div`
  width: 100px;
  height: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index:999;
  background: linear-gradient(
    to bottom left,
    lightgreen,
    rgba(255, 255, 255, 0.5),
    lightskyblue
  );
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
  right: 0;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background: transparent;

  &:hover {
    background: linear-gradient(
      to bottom right,
      lightgreen,
      rgba(255, 255, 255, 0.5),
      lightskyblue
    );
  }
`;

const DropdownContent = styled.div`
  display: none;
  min-width: 100px;
`;

const Language = styled.button`
  padding: 5px;
  color: rgba(0, 0, 0, 0.8);
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: "poppins", sans-serif;
  font-family: "Noto Sans SC", sans-serif;

  &:hover {
    transition: 0.2s;
    transform: scale(1.1);
  }
`;

const Global = styled.img`
  padding-right: 8px;
  width: 22px;
`;

const Arrow = styled.img`
  width: 15px;
`;

const Flag = styled.img`
  width: 20px;
  margin: 0 5px;
`;

export default Languages;
