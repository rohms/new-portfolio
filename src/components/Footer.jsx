import React from "react";
import stackoverflow from "/stackoverflow.png";
import linkedin from "/linkedin.png";
import github from "/github.svg";
import codewars from "/codewars.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-list">
        <li className="social-list__item">
          <a
            href="https://stackoverflow.com/users/17149568/rohms"
            className="social-list__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={stackoverflow} alt="stackoverflow-logo" />
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://www.linkedin.com/in/roosa-hamalainen/"
            className="social-list__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin-logo" />
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://github.com/rohms"
            className="social-list__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github-logo" />
          </a>
        </li>
      </ul>
      <a
        href="https://www.codewars.com/users/rohms"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="codewars-badge"
          src="https://www.codewars.com/users/rohms/badges/micro"
          alt="codewars-status"
        />
      </a>
    </footer>
  );
};

export { Footer };
