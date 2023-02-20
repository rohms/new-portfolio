import React from "react";
import stackoverflow from "@assets/stackoverflow.png";
import linkedin from "@assets/linkedin.png";
import github from "@assets/github.svg";
import codewars from "@assets/codewars.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-list">
        <li className="social-list__item">
          <a
            href="https://www.codewars.com/users/rohms"
            className="social-list__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={codewars} alt="codewars-logo" />
          </a>
        </li>
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
    </footer>
  );
};

export { Footer };
