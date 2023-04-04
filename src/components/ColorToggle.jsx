import React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "../context/themeContext";

const ColorToggle = () => {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <div>
      <IconButton sx={{ mr: 1 }} onClick={() => toggleTheme()} color="inherit">
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </div>
  );
};

export { ColorToggle };
