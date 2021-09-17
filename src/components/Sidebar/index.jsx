import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { mobile, tablet, tabletPro, laptop} from "../../responsive";

const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Profile>
          <Image src="assets/signal-fish.jpg" alt="signal fish" />
          <Name>{t("Sidebar.Name")}</Name>
          <JobTitle>{t("Sidebar.JobTitle")}</JobTitle>
          <Social>
            <Link
              href="https://github.com/signal-fish"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SocialIcon src="assets/icons/social/github.svg" alt="github" />
            </Link>
            <Link
              href="https://codepen.io/signal_fish/pens/public"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SocialIcon src="assets/icons/social/codepen.svg" alt="codepen" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/signal-fish-552aaa211/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SocialIcon
                src="assets/icons/social/linkedin.svg"
                alt="linkedin"
              />
            </Link>
            <Link
              href="https://twitter.com/fish_signal"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SocialIcon src="assets/icons/social/twitter.svg" alt="twitter" />
            </Link>
          </Social>
        </Profile>
        <Info>
          {/* Skills */}
          <SkillsContainer>
            <TitleContainer>
              <IconContainer>
                <TitleIcon src="assets/icons/skills/tools.svg" alt="skills" />
              </IconContainer>
              <TitleText>{t("Sidebar.SkillTitle")}</TitleText>
            </TitleContainer>
            <Skills>
              <Skill>
                <Tooltip>{t("Sidebar.Tooltip.html5")}</Tooltip>
                <IconContainer>
                  <SpecialIcon
                    src="assets/icons/skills/html5.svg"
                    alt="html 5"
                  />
                </IconContainer>
                <Percent>
                  <Level width="85%"></Level>
                </Percent>
              </Skill>
              <Skill>
                <Tooltip>{t("Sidebar.Tooltip.css3")}</Tooltip>
                <IconContainer>
                  <SpecialIcon src="assets/icons/skills/css3.svg" alt="css 3" />
                </IconContainer>
                <Percent>
                  <Level width="85%"></Level>
                </Percent>
              </Skill>
              <Skill>
                <Tooltip>{t("Sidebar.Tooltip.javascript")}</Tooltip>
                <IconContainer>
                  <SpecialIcon
                    src="assets/icons/skills/javascript.svg"
                    alt="javascript"
                  />
                </IconContainer>
                <Percent>
                  <Level width="80%"></Level>
                </Percent>
              </Skill>
              <Skill>
                <Tooltip>{t("Sidebar.Tooltip.react")}</Tooltip>
                <IconContainer>
                  <SpecialIcon
                    src="assets/icons/skills/react.svg"
                    alt="react"
                  />
                </IconContainer>
                <Percent>
                  <Level width="80%"></Level>
                </Percent>
              </Skill>
              <Skill>
                <Tooltip>{t("Sidebar.Tooltip.nodejs")}</Tooltip>
                <IconContainer>
                  <Icon src="assets/icons/skills/nodejs.svg" alt="node.js" />
                </IconContainer>
                <Percent>
                  <Level width="65%"></Level>
                </Percent>
              </Skill>
              <Skill>
                <Tooltip>{t("Sidebar.Tooltip.express")}</Tooltip>
                <IconContainer>
                  <Icon
                    src="assets/icons/skills/expressjs.svg"
                    alt="expressjs"
                  />
                </IconContainer>
                <Percent>
                  <Level width="60%"></Level>
                </Percent>
              </Skill>
              <Skill>
                <Tooltip>{t("Sidebar.Tooltip.mongodb")}</Tooltip>
                <IconContainer>
                  <Icon src="assets/icons/skills/mongodb.svg" alt="mongodb" />
                </IconContainer>
                <Percent>
                  <Level width="70%"></Level>
                </Percent>
              </Skill>
              <Skill>
                <Tooltip>{t("Sidebar.Tooltip.bootstrap")}</Tooltip>
                <IconContainer>
                  <Icon
                    src="assets/icons/skills/bootstrap.svg"
                    alt="bootstrap"
                  />
                </IconContainer>
                <Percent>
                  <Level width="70%"></Level>
                </Percent>
              </Skill>
              <Skill>
                <Tooltip>{t("Sidebar.Tooltip.jquery")}</Tooltip>
                <IconContainer>
                  <Icon src="assets/icons/skills/jquery.svg" alt="jquery" />
                </IconContainer>
                <Percent>
                  <Level width="80%"></Level>
                </Percent>
              </Skill>
              <Skill>
                <Tooltip>{t("Sidebar.Tooltip.webpack")}</Tooltip>
                <IconContainer>
                  <Icon src="assets/icons/skills/webpack.svg" alt="webpack" />
                </IconContainer>
                <Percent>
                  <Level width="70%"></Level>
                </Percent>
              </Skill>
              <Skill>
                <Tooltip>{t("Sidebar.Tooltip.git")}</Tooltip>
                <IconContainer>
                  <Icon src="assets/icons/skills/git.svg" alt="git" />
                </IconContainer>
                <Percent>
                  <Level width="70%"></Level>
                </Percent>
              </Skill>
              <Skill>
                <Tooltip>{t("Sidebar.Tooltip.mysql")}</Tooltip>
                <IconContainer>
                  <Icon src="assets/icons/skills/mysql.svg" alt="mysql" />
                </IconContainer>
                <Percent>
                  <Level width="60%"></Level>
                </Percent>
              </Skill>
              <Skill>
                <Tooltip>{t("Sidebar.Tooltip.python")}</Tooltip>
                <IconContainer>
                  <Icon src="assets/icons/skills/python.svg" alt="python" />
                </IconContainer>
                <Percent>
                  <Level width="70%"></Level>
                </Percent>
              </Skill>
              <Skill>
                <Tooltip>{t("Sidebar.Tooltip.linux")}</Tooltip>
                <IconContainer>
                  <Icon src="assets/icons/skills/linux.svg" alt="linux" />
                </IconContainer>
                <Percent>
                  <Level width="60%"></Level>
                </Percent>
              </Skill>
            </Skills>
          </SkillsContainer>

          {/* Languages */}
          <LanguagesContainer>
            <TitleContainer>
              <IconContainer>
                <LanguageIcon
                  src="assets/icons/languages/languages.svg"
                  alt="languages"
                />
              </IconContainer>
              <TitleText>{t("Sidebar.LanguageTitle")}</TitleText>
            </TitleContainer>
            <Languages>
              <Language>
                <IconContainer>
                  <Icon src="assets/icons/languages/china.svg" alt="chinese" />
                </IconContainer>
                <Percent>
                  <Level width="90%"></Level>
                </Percent>
              </Language>
              <Language>
                <IconContainer>
                  <Icon
                    src="assets/icons/languages/america.svg"
                    alt="english"
                  />
                </IconContainer>
                <Percent>
                  <Level width="70%"></Level>
                </Percent>
              </Language>
              <Language>
                <IconContainer>
                  <Icon src="assets/icons/languages/japan.svg" alt="japanese" />
                </IconContainer>
                <Percent>
                  <Level width="30%"></Level>
                </Percent>
              </Language>
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
  })}
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
    background: rgba(0, 0, 0, 0.5);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.8);
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

const SocialIcon = styled.img`
  width: 22px;
  height: 22px;

  ${tabletPro({
    width: "20px",
    height: "20px",
  })};

  ${tablet({
    width: "18px",
    height: "18px",
  })};

  ${mobile({
    width: "25px",
    height: "25px",
  })};
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const Icon = styled.img`
  flex: 1;
  width: 18px;
  height: 18px;
  padding-top: 5px;
`;

const LanguageIcon = styled.img`
  flex: 1;
  width: 21px;
  height: 21px;
  padding-top: 8px;

  ${tabletPro({
    width: "19px",
    height: "19px",
  })}

  ${tablet({
    width: "17px",
    height: "17px",
  })}

  ${mobile({
    width: "22px",
    height: "22px",
  })}
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

const TitleIcon = styled.img`
  flex: 1;
  width: 18px;
  height: 18px;
  padding-top: 7px;
  padding-left: 3px;

  ${tabletPro({
    width: "17px",
    height: "17px",
  })}

  ${tablet({
    width: "16px",
    height: "16px",
  })}

  ${mobile({
    width: "20px",
    height: "20px",
  })}
`;

const TitleText = styled.h1`
  flex: 25;
  font-size: 20px;
  font-weight: 500;
  font-family: "Noto Sans SC", sans-serif;

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

  ${tabletPro({
    fontSize: "10px",
  })}

  ${tablet({
    fontSize: "8px",
  })}

  ${mobile({
    fontSize: "12px",
  })}
`;

const SpecialIcon = styled.img`
  width: 21px;
  height: 21px;
  padding-top: 5px;
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
  margin-bottom: 5px;

  ${tabletPro({
    width: "100%",
  })}
`;

const IconContainer = styled.span`
  flex: 1.3;
  margin-right: 5px;
  font-size: 20px;
`;

const Percent = styled.span`
  flex: 9;
  position: relative;
  width: 100%;
  height: 6px;
  background-color: lightblue;
  display: block;
  border-radius: 3px;
`;

const Level = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(to bottom right, lightgreen, #3333cc);
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
  color: rgba(0, 0, 0, 0.5);
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
