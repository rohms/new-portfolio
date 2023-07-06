import React, { useMemo } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Toast } from "./components/Toast";
import { ThemeContextProvider } from "./context/themeContext";
import "./theme";
import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { useThemeContext } from "./context/themeContext";
import { light, dark } from "./theme";

const Root = () => {
  const { darkMode } = useThemeContext();

  let theme = useMemo(() => {
    return createTheme(darkMode ? dark : light);
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App id={theme} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toast />
    <ThemeContextProvider>
      <Root />
    </ThemeContextProvider>
  </React.StrictMode>
);
