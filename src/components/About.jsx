import React from "react";
import rhm from "@assets/rhm.jpg";

const About = () => {
  return (
    <>
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
              I'm a frontend developer with some backend experience. I have worked previously 5 years in IT-Support, so troubleshooting bugs is not something new for me.</p>
            <p className="max-text"> I completed a full-stack coding bootcamp at the end of 2021. I did a frontend developer internship in 2022-2023 and am now looking for new job opporturnities. I have been working mainly with React, JavaScript, HTML5, CSS and TypeScript.</p>
            <p className="max-text"> See below some of my
              projects and get in touch!</p>
          </div>
      </section>
    </>
  );
};

export { About };
