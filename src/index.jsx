import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { Toast } from "./components/Toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toast />
    <App />
  </React.StrictMode>
);
