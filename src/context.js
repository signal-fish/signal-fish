import React, { useState, useContext, useEffect } from "react";
import data from "./data";
import i18next from "i18next";

const AppContext = React.createContext();

const getStorageTheme = () => {
  let theme = "dark-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const AppProvider = ({ children }) => {
  const allCategories = [
    "All",
    ...new Set(data.map((portfolio) => portfolio.category)),
  ];
  const [categories] = useState(allCategories);
  const [portfolios, setPortfolios] = useState(data);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState(getStorageTheme());

  const portfoliosPerPage = 12;
  const pageCount = Math.ceil(portfolios.length / portfoliosPerPage);

  const handleChange = (language) => {
    i18next.changeLanguage(language);
  };

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // filter portfolios if current portfolios or searchTerm changed
  useEffect(() => {
    const filterPortfolios = (category) => {
      if (searchTerm === "") {
        if (category === "All") {
          setPortfolios(data);
          return;
        }
        const newPortfolios = data.filter(
          (portfolio) => portfolio.category === category
        );
        setPortfolios(newPortfolios);
      } else {
        if (category === "All") {
          setPortfolios(
            data.filter((item) =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
          );
          return;
        }
        const newPortfolios = data
          .filter((portfolio) => portfolio.category === category)
          .filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
        setPortfolios(newPortfolios);
      }
    };
    filterPortfolios(currentCategory);
  }, [currentCategory, searchTerm]);

  // update currentPageNumber to 0 if portfolios changed
  useEffect(() => {
    setCurrentPageNumber(0);
  }, [portfolios]);

  const generateArray = (left, right) => {
    const arr = Array(right - left).fill();
    for (let i = left, j = 0; i < right; i++, j++) {
      arr[j] = i;
    }
    return arr;
  };

  return (
    <AppContext.Provider
      value={{
        categories,
        currentCategory,
        setCurrentCategory,
        portfolios,
        currentPageNumber,
        setCurrentPageNumber,
        portfoliosPerPage,
        pageCount,
        generateArray,
        setSearchTerm,
        theme,
        themeToggler,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
