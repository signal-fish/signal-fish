import React from "react";
import styled from "styled-components";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { GoChevronDown } from "react-icons/go";
import {AiOutlineGlobal} from 'react-icons/ai'

const Languages = () => {
  const { t } = useTranslation();
  const handleChange = (language) => {
    i18next.changeLanguage(language);
  };

  return (
    <Container>
      <Dropdown>
        <Button id="dropdownButton">
          <LanguageIcon>
            <AiOutlineGlobal />
          </LanguageIcon>
          {/* <Global src="assets/global.svg" alt="global" /> */}
          <LanguageIcon id="arrow">
            <GoChevronDown />
          </LanguageIcon>
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
  z-index: 999;
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
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  border: none;
  background: transparent;

  &:hover {
    opacity: 0.6;
  }
`;

const DropdownContent = styled.div`
  display: none;
  min-width: 100px;
`;

const Language = styled.button`
  padding: 5px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: "poppins", sans-serif;
  font-family: "Noto Sans SC", sans-serif;
  color: ${(props) => props.theme.fontColor};
  transition: 0.3s;
  min-width: 100px;

  &:hover {
    transform: scale(1.1);
    background: ${props => props.theme.portfoliosBg};
  }
`;

const LanguageIcon = styled.div`
  color: ${(props) => props.theme.fontColor};
  font-size: 23px;
  display: flex;
  align-items: center;
`;

const Flag = styled.img`
  width: 20px;
  margin: 0 5px;
`;

export default Languages;
