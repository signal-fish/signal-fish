import {
  FaGithub,
  FaCodepen,
  FaLinkedin,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaSass,
  FaPython,
} from "react-icons/fa";
import {IoLogoCss3, IoLogoJavascript} from 'react-icons/io'
import {
  SiMongodb,
  SiExpress,
  SiWebpack,
  SiStyledcomponents,
  SiPostman,
  SiMaterialui,
  SiAntdesign
} from "react-icons/si";


export const socials = [
  {
    id: 1,
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/signal-fish",
    lightColor: "#000",
    darkColor: "#7979f8",
  },
  {
    id: 2,
    name: "codepen",
    icon: <FaCodepen />,
    link: "https://codepen.io/signal_fish",
    lightColor: "#000",
    darkColor: "#fff",
  },
  {
    id: 3,
    name: "linkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/signal-fish-552aaa211/",
    lightColor: "#0177b5",
    darkColor: "#0492df",
  },
];

export const skills = [
  {
    id: 1,
    name: "HTML5",
    icon: <FaHtml5 />,
    level: "90%",
    lightColor: "orange",
    darkColor: "yellowgreen",
  },
  {
    id: 2,
    name: "CSS3",
    icon: <IoLogoCss3 />,
    level: "80%",
    lightColor: "#0277BD",
    darkColor: "#039BE5",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <IoLogoJavascript />,
    level: "80%",
    lightColor: "#000",
    darkColor: "yellow",
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact />,
    level: "80%",
    lightColor: "blue",
    darkColor: "lightskyblue",
  },
  {
    id: 5,
    name: "NodeJS",
    icon: <FaNodeJs />,
    level: "70%",
    lightColor: "#5e9129",
    darkColor: "#8cc84b",
  },
  {
    id: 6,
    name: "Express",
    icon: <SiExpress />,
    level: "70%",
    lightColor: "#000",
    darkColor: "#fff",
  },
  {
    id: 7,
    name: "MongoDB",
    icon: <SiMongodb />,
    level: "70%",
    lightColor: "green",
    darkColor: "#6cac48",
  },
  {
    id: 8,
    name: "Webpack",
    icon: <SiWebpack />,
    level: "75%",
    lightColor: "#7979f8",
    darkColor: "lightblue",
  },
  {
    id: 9,
    name: "Git",
    icon: <FaGitAlt />,
    level: "70%",
    lightColor: "green",
    darkColor: "orange",
  },
  {
    id: 10,
    name: "Python",
    icon: <FaPython />,
    level: "70%",
    lightColor: "#420420",
    darkColor: "#8cc84b",
  },
  {
    id: 11,
    name: "Sass",
    icon: <FaSass />,
    level: "70%",
    lightColor: "#f06292",
    darkColor: "#f06292",
  },
  {
    id: 12,
    name: "Styled Components",
    icon: <SiStyledcomponents />,
    level: "85%",
    lightColor: "#420420",
    darkColor: "#8cc84b",
  },
  {
    id: 13,
    name: "Material UI",
    icon: <SiMaterialui />,
    level: "80%",
    lightColor: "#0288d1",
    darkColor: "#29b6f6",
  },
  {
    id: 14,
    name: "Ant Design",
    icon: <SiAntdesign />,
    level: "70%",
    lightColor: "#0288d1",
    darkColor: "#29b6f6",
  },
  {
    id: 15,
    name: "Postman",
    icon: <SiPostman />,
    level: "65%",
    lightColor: "green",
    darkColor: "#8cc84b",
  },
];

export const languages = [
  {
    id: 1,
    name: "Chinese",
    icon: "assets/icons/languages/china.svg",
    level: "85%",
  },
  {
    id: 2,
    name: "English",
    icon: "assets/icons/languages/america.svg",
    level: "70%",
  },
  {
    id: 3,
    name: "Japanese",
    icon: "assets/icons/languages/japan.svg",
    level: "35%",
  },
];
