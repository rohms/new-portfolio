import { grey, teal, cyan, indigo, blueGrey } from "@mui/material/colors";

const light = {
  palette: {
    mode: "light",
    background: {
      default:  teal[100],
    },
    text: {
      primary: grey[900],
    },
    secondary: {
      main: blueGrey[500], // Set the color of the h2 headers
    },
  },
};

const dark = {
  palette: {
    mode: "dark",
    text: {
      primary: grey[200],
    },
  },
};

export { light, dark };
