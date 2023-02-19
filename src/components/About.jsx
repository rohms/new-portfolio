import React from "react";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about--container">
          <div className="about--container__body">
            <h1>
              I'm Roosa <br /> and I build FRONTEND
            </h1>
            <h2>
              Hello there! 👋
              <br />
            </h2>
            <p>
              I'm a frontend developer with some backend experience. I have been
              working mainly with React, JavaScript, HTML5, CSS and TypeScript.
              See below some of my projects and get in touch!
            </p>

            <div className="work--container">
              <a href="#projects" className="projects">
                See my projects
              </a>
              <a href="#skills">See my skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <img
              className="heroimage"
              alt="hero"
              src="../src/assets/rhmsmall.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export { About };
