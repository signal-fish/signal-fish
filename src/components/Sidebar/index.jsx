import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { mobile, tablet, tabletPro, laptop } from "../../responsive";
import { socials, skills, languages } from "../../sidebar-data";
import { FaTools, FaLanguage } from "react-icons/fa";

const Sidebar = ({ theme }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Profile>
          <Image src="assets/signal-fish.jpg" alt="signal fish" />
          <Name>{t("Sidebar.Name")}</Name>
          <JobTitle>{t("Sidebar.JobTitle")}</JobTitle>
          <Social>
            {socials.map((social) => {
              const { id, icon, link, lightColor, darkColor } = social;
              return (
                <LinkWrapper key={id}>
                  <Link color={theme === 'light' ? lightColor : darkColor} href={link} target="_blank" rel="noreferrer noopener">
                    {icon}
                  </Link>
                </LinkWrapper>
              );
            })}
          </Social>
        </Profile>

        <Info>
          {/* Skills */}
          <SkillsContainer>
            <TitleContainer>
              <IconContainer>
                <ToolsIcon>
                  <FaTools />
                </ToolsIcon>
              </IconContainer>
              <TitleText>{t("Sidebar.SkillTitle")}</TitleText>
            </TitleContainer>
            <Skills>
              {skills.map((skill) => {
                const { id, name, icon, level, lightColor, darkColor } = skill;
                return (
                  <Skill key={id}>
                    <Tooltip>{name}</Tooltip>
                    <IconContainer
                      color={theme === "light" ? lightColor : darkColor}
                    >
                      {icon}
                    </IconContainer>
                    <Percent>
                      <Level width={level}></Level>
                    </Percent>
                  </Skill>
                );
              })}
            </Skills>
          </SkillsContainer>

          {/* Languages */}
          <LanguagesContainer>
            <TitleContainer>
              <LanguageTitleIcon>
                <FaLanguage />
              </LanguageTitleIcon>
              <TitleText>{t("Sidebar.LanguageTitle")}</TitleText>
            </TitleContainer>
            <Languages>
              {languages.map((language) => {
                const { id, name, icon, level } = language;
                return (
                  <Language key={id}>
                    <LanguageIcon>
                      <Icon src={icon} alt={name} />
                    </LanguageIcon>
                    <Percent>
                      <Level width={level}></Level>
                    </Percent>
                  </Language>
                );
              })}
            </Languages>
          </LanguagesContainer>
        </Info>
        <EmailContainer>
          <Email href="mailto:signalfish38861721@gmail.com">
            {t("Sidebar.email")}
          </Email>
        </EmailContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  flex: 1.6;
  display: flex;
  transition: 0.6s;
  background: ${(props) => props.theme.body};

  ${mobile({
    flex: "none",
  })}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Profile = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${tabletPro({
    flex: "3.5",
  })};
`;

const Image = styled.img`
  width: 200px;
  height: 245px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 25px;

  ${tabletPro({
    width: "160px",
    height: "200px",
  })};

  ${tablet({
    width: "125px",
    height: "155px",
  })};

  ${mobile({
    width: "200px",
    height: "250px",
  })}
`;

const Name = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
  margin-top: 5px;
  font-weight: 500;
  font-family: "poppins", sans-serif;
  font-family: "Noto Sans SC", sans-serif;
  letter-spacing: 3px;
  color: ${(props) => props.theme.fontColor};

  ${tabletPro({
    fontSize: "25px",
  })};

  ${tablet({
    fontSize: "19px",
  })};

  ${mobile({
    fontSize: "30px",
  })};
`;

const JobTitle = styled.h1`
  font-size: 22px;
  font-weight: 300;
  font-family: "poppins", sans-serif;
  font-family: "Noto Sans SC", sans-serif;
  letter-spacing: 1px;
  margin-top: 0;
  color: ${(props) => props.theme.fontColor};

  ${tabletPro({
    fontSize: "20px",
  })};

  ${tablet({
    fontSize: "17px",
  })};
  ${mobile({
    fontSize: "24px",
  })};
`;

const Info = styled.div`
  flex: 9;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.scrollBarColor};
  }

  ${tabletPro({
    flex: "15",
  })}
`;

const Social = styled.div`
  margin: 10px 5% 5px 5%;
  display: flex;
  justify-content: space-around;
  width: 100%;

  ${tablet({
    margin: "10px 0 5px 0",
    justifyContent: "space-around",
  })}

  ${mobile({
    margin: "10px 0",
    width: "80%",
  })}
`;

const LinkWrapper = styled.div`
  font-size: 22px;
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.color};

  &:hover {
    opacity: 0.6;
  }
`;

const Icon = styled.img`
  width: 20px;
`;

const LanguageIcon = styled.div`
  flex: 1.3;
  display: flex;
  align-items: center;
  margin-right: 7px;

  ${mobile({
    flex: 0.8,
  })}
`;

const ToolsIcon = styled.div`
  font-size: 19px;
  margin-top: 2px;
  display: flex;
  align-items: center;
`;

const SkillsContainer = styled.div`
  margin: 0 5%;

  ${tabletPro({
    margin: "10px 10% 0 10%",
  })}

  ${tablet({
    margin: "0 5% 0 5%",
  })}

  ${mobile({
    margin: "0 10% 0 10%",
  })}
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const TitleText = styled.h1`
  flex: 25;
  font-size: 20px;
  font-weight: 500;
  font-family: "Noto Sans SC", sans-serif;
  color: ${(props) => props.theme.fontColor};

  ${tabletPro({
    fontSize: "18px",
  })}

  ${tablet({
    fontSize: "16px",
  })}

  ${mobile({
    fontSize: "22px",
  })}
`;

const Skills = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Skill = styled.li`
  list-style: none;
  width: 47%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: help;

  &:hover span {
    opacity: 1;
  }

  ${tabletPro({
    cursor: "default",
    width: "100%",
  })}
`;

const Tooltip = styled.span`
  opacity: 0;
  position: absolute;
  z-index: 999;
  font-size: 12px;
  transition: 1s;
  color: ${(props) => props.theme.fontColor};
  letter-spacing: px;

  ${tabletPro({
    fontSize: "10px",
  })}
  ${tablet({
    fontSize: "8px",
  })}
    ${mobile({
    fontSize: "12px",
  })};
`;

const LanguagesContainer = styled.div`
  margin: 5px 5% 0 5%;

  ${tabletPro({
    margin: "20px 10% 0 10%",
  })}

  ${tablet({
    margin: "5px 5% 0 5%",
  })}

  ${mobile({
    margin: "10px 10% 0 10%",
  })}
`;

const LanguageTitleIcon = styled.div`
  font-size: 36px;
  display: flex;
  align-items: center;
  margin-right: 6px;
  margin-top: 3px;
  color: ${(props) => props.theme.fontColor};
`;

const Languages = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${mobile({
    marginBottom: "30px",
  })}
`;

const Language = styled.li`
  list-style: none;
  width: 47%;
  display: flex;
  align-items: center;
  margin: 10px 5px 5px 0;

  ${tabletPro({
    width: "100%",
  })}
`;

const IconContainer = styled.span`
  flex: 1.3;
  margin: 5px 5px 5px 0;
  font-size: 20px;
  color: ${(props) => props.theme.fontColor};
  display: flex;
  align-items: center;
  color: ${(props) => props.color};
  ${mobile({
    flex: 0.8,
  })}
`;

const Percent = styled.span`
  flex: 9;
  position: relative;
  width: 100%;
  height: 6px;
  background-color: ${(props) => props.theme.percentBgColor};
  display: block;
  border-radius: 3px;
`;

const Level = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: ${(props) => props.theme.levelBgColor};
  width: ${(props) => props.width};
  border-radius: 3px 0 0 3px;
`;

const EmailContainer = styled.div`
  flex: 0.75;
  margin: 30px 5% 50px 5%;
  background: linear-gradient(to bottom right, lightskyblue, lightgreen);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  padding: 5px 0;

  &:hover {
    background: linear-gradient(to bottom right, lightgreen, lightskyblue);
    opacity: 0.8;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
  }

  ${laptop({
    minHeight: "40px",
    margin: "30px 10% 50px 10%",
  })}

  ${tabletPro({
    minHeight: "30px",
    margin: "30px 10% 50px 10%",
  })}

  ${tablet({
    margin: "25px 5% 50px 5%",
  })}

  ${mobile({
    minHeight: "40px",
    margin: "0 10% 40px 10%",
  })}
`;

const Email = styled.a`
  color: #000;
  font-size: 25px;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  min-height: 35px;
  text-align: center;
  font-family: "Noto Sans SC", sans-serif;

  ${laptop({
    fontSize: "23px",
  })}

  ${tabletPro({
    fontSize: "22px",
  })}
`;

export default Sidebar;
