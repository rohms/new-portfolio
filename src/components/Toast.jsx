import React from "react";
import { PropTypes } from "prop-types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ msg }) => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable={true}
      pauseOnHover={true}
      theme="colored"
    />
  );
};

Toast.propTypes = {
  msg: PropTypes.string,
};

export { Toast };
