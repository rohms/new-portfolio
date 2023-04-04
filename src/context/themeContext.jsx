import { createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
    } else if (localStorage.getItem("theme") === "light") {
      setDarkMode(false);
    } else {
      setDarkMode(prefersDarkMode);
    }
  }, [prefersDarkMode]);

  const toggleTheme = () => {
    if (darkMode) {
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = (props) => useContext(ThemeContext);

export { ThemeContext, ThemeContextProvider, useThemeContext };
