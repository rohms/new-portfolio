import React from "react";
// import rhm from "@assets/rhmsmall.jpg";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about-container">
          <div className="about-container__body">
            <h1>
              I'm Roosa <br /> and I build FRONTEND
            </h1>
            <div className="about-container__hello">
              {/* <img className="heroimage" alt="hero portrait" src={rhm} /> */}
              <h2>Hello there! 👋</h2>
            </div>
            <p>
              I'm a frontend developer with some backend experience and with
              IT-support background. <br />I have been working mainly with
              React, JavaScript, HTML5, CSS and TypeScript. <br /> See below
              some of my projects and get in touch!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export { About };
