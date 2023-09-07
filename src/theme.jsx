import { grey, teal, blueGrey } from "@mui/material/colors";

const light = {
  palette: {
    mode: "light",
    background: {
      default:  blueGrey[50],
    },
    text: {
      primary: grey[900],
    },
    secondary: {
      main: blueGrey[500],
    },
  },
};

const dark = {
  palette: {
    mode: "dark",
    background: {
      default:  grey[900],
    },
    text: {
      primary: blueGrey[200],
    },
  },
};

export { light, dark };
