import { grey, teal, cyan, blueGrey } from "@mui/material/colors";

const light = {
  palette: {
    mode: "light",
    background: {
      default: teal[50],
    },
    text: {
      primary: grey[900],
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
