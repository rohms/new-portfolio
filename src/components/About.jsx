import React from "react";
import rhm from "@assets/rhm.jpg";

const About = () => {
  return (
      <section id="about">
          <div className="about__hello">
              <img className="heroimage" alt="hero portrait" src={rhm} />
              <h2 className="hide">Hello there! 👋</h2>
          </div>
          <div className="about__body">
            <h1>
              I'm Roosa <br /> and I build FRONTEND
            </h1>
            <p className="max-text">
            As a web developer with 5 years of experience in IT-Support,
            I bring a unique perspective to finding and troubleshooting bugs. </p>
            <p className="max-text">
            During my time in IT-Support, I gained valuable experience in
            identifying and resolving technical issues, which has proven to
            be valuable in my web development career.
            </p>
            <p className="max-text">
            I completed a full-stack coding bootcamp, gained experience as a
            frontend dev during my internship in 2022-2023.
            I have expertise in React, JavaScript, HTML5, CSS, and TypeScript.
            </p>
            <p className="max-text">
            Please take a look at my projects and get in touch!</p>
          </div>
      </section>
  );
};

export { About };
