import React from "react";
import { ColorToggle } from "./ColorToggle";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="navbar-container">
          <a href="#about" className="navbar__logo">
            <img src="/roosalogo.png" alt="page logo" />
          </a>
          <nav>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <ColorToggle />
      </header>
    </>
  );
};

export { Navbar };
