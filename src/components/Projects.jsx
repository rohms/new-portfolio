import React from "react";
import lnight from "@assets/lnight.jpg";
import css3 from "@assets/badges/css3.svg";
import js from "@assets/badges/javascript-logo.png";
import react from "@assets/badges/react.svg";
import mongo from "@assets/badges/mongodb.svg";
import nodejs from "@assets/badges/nodejs.svg";
import html5 from "@assets/badges/html5.svg";
import travelblog from "@assets/travel.jpg";
import dadjoke from "@assets/dadjokegenerator.jpg";
import sass from "@assets/badges/sass.png";
import webpack from "@assets/badges/webpack.png";
import reactTS from "@assets/ReactTSQuiz.jpg";
import TS from "@assets/badges/typescript.png";
import randomusers from "@assets/randomusers.jpg";

import { Fragment } from "react";
import { Badge } from "./Badge";

const projects = [
  {
    name: "L-Night app",
    subtitle: "A fullstack app",
    link: "https://www.l-night.com",
    info: "A fullstack app",
    image: lnight,
    skills: [
      {
        name: "html5",
        src: html5,
        alt: "html5-logo",
      },
      {
        name: "css3",
        src: css3,
        alt: "css3-logo",
      },
      {
        name: "javascript",
        src: js,
        alt: "javascript-logo",
      },
      {
        name: "react",
        src: react,
        alt: "react-logo",
      },
      {
        name: "mongodb",
        src: mongo,
        alt: "mongodb-logo",
      },
      {
        name: "nodejs",
        src: nodejs,
        alt: "nodejs-logo",
      },
    ],
    description:
      "I created a webpage for the L-Night group. I used for the frontend ReactJS, React hooks like useState, useEffect and useContext, CSS, HTML and Material UI. For the backend I used NodeJS together with Express and MongoDB. Images are being uploaded to AWS S3 bucket. For authentication I used JWT.",
  },
  {
    name: "Travel blog",
    subtitle: "A small travel blog with ReactJS",
    link: "https://kaleidoscopic-bubblegum-ef6c97.netlify.app/",
    info: "",
    image: travelblog,
    description: "Practising React props and mapping.",
    skills: [
      {
        name: "html5",
        src: html5,
        alt: "html5-logo",
      },
      {
        name: "css3",
        src: css3,
        alt: "css3-logo",
      },
      {
        name: "javascript",
        src: js,
        alt: "javascript-logo",
      },
      {
        name: "react",
        src: react,
        alt: "react-logo",
      },
    ],
  },
  {
    name: "Random People Search",
    subtitle: "Implementing search and filtering",
    link: "https://storied-heliotrope-c0f833.netlify.app/",
    info: "",
    image: randomusers,
    description:
      "Finished a random people search where you can search people by their first or lastname or email. Added pagination with the help of MUI components.",
    skills: [
      {
        name: "js",
        src: js,
        alt: "css3-logo",
      },
      {
        name: "react",
        src: react,
        alt: "react-logo",
      },
    ],
  },
  {
    name: "Dad Joke Generator",
    subtitle: "Learning basics of webpack 5",
    link: "https://silly-kitten-2afd87.netlify.app",
    info: "",
    image: "",
    description:
      "I got to use Webpack 5, sass/scss, added all loaders needed for the different filetypes and babel so that the webpage will work also with older browsers. I used also the webpack-bundle-analyzer so that you get to see what was used. Axios was used for fetching the jokes from: https://icanhazdadjoke.com/ I used also the HTMLWebpackPlugin.",
    skills: [
      {
        name: "js",
        src: js,
        alt: "css3-logo",
      },
      {
        name: "html5",
        src: html5,
        alt: "javascript-logo",
      },
      {
        name: "sass",
        src: sass,
        alt: "sass-logo",
      },
      {
        name: "webpack5",
        src: webpack,
        alt: "webpack-logo",
      },
    ],
  },
  {
    name: "React TypeScript Quiz",
    subtitle: "Learning to use TypeScript with react",
    link: "https://silly-kitten-2afd87.netlify.app",
    info: "",
    image: reactTS,
    description:
      "Fetching the API, displaying data. Learning to use TypeScript in a React project",
    skills: [
      {
        name: "react",
        src: react,
        alt: "react-logo",
      },
      {
        name: "TS",
        src: TS,
        alt: "typescript-logo",
      },
      {
        name: "css",
        src: css3,
        alt: "css-logo",
      },
    ],
  },
];

const Projects = () => {
  return (
    <>
      <section id="projects" className="my--projects">
        <div className="projects--container__info">
          <h1>Apps and projects I have built</h1>
        </div>
        {projects.map((project) => (
          <Fragment key={project.name}>
            <a
              href={`${project.link}`}
              target="_blank"
              rel="noreferrer"
              key={project.name}
            >
              <img
                src={project.image}
                alt="project picture"
                className="project--image"
              />
            </a>
            <div className="projects--container__project">
              <span className="project--headers">
                <h1>{project.name}</h1>
                <h3>{project.subtitle}</h3>
              </span>
              <div className="project--body">
                <p>Skills used:</p>
                <div className="badges--container">
                  {project?.skills?.map((skill, idx) => (
                    <Badge key={idx} imageSrc={skill.src} altText={skill.alt} />
                  ))}
                </div>

                <p className="projects--container__text">
                  {project.description}
                </p>
              </div>
              <span className="projects--container__divider"></span>
            </div>
          </Fragment>
        ))}
      </section>
    </>
  );
};

export { Projects };
