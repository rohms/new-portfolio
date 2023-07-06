import React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "../context/themeContext";

const ColorToggle = () => {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <div className="toggle">
      <IconButton
        className="toggle__custom-button"
        onClick={() => toggleTheme()}
        color="inherit"
      >
        {darkMode ? (
          <>
            <p>light</p>
            <Brightness7Icon />
          </>
        ) : (
          <>
            <p>dark</p>
            <Brightness4Icon />
          </>
        )}
      </IconButton>
    </div>
  );
};

export { ColorToggle };
