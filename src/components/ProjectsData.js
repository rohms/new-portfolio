
import css3 from "@assets/badges/css.svg";
import js from "@assets/badges/javascriptlogo.png";
import react from "@assets/badges/react.svg";
import mongo from "@assets/badges/mongodb.svg";
import nodejs from "@assets/badges/nodejs.svg";
import html5 from "@assets/badges/html.svg";
import lnightapp from "@assets/lnightapp.jpg";
import sass from "@assets/badges/sass.png";
import webpack from "@assets/badges/webpack.png";
import reactTS from "@assets/reactquiz.jpg";
import TS from "@assets/badges/typescript.png";
import randomusers from "@assets/randoms.jpg";
import randomp from "@assets/random.jpg";
import tenzies from "@assets/tenzies.jpg";
import vue from "@assets/learningvue.jpg";
import tictactoe from "@assets/tictac.jpg";
import next from "@assets/badges/nextjs.png";
import cooking from "@assets/cooking.jpg";
import mytodos from "@assets/mytodos.jpg";
import angular from "@assets/badges/angular.svg";
import techpanda from "@assets/techpandas.jpg";
import bootstrap from "@assets/badges/bootstrap.svg";
import jokegen from "@assets/jokegen.jpg";
import signup from "@assets/signup.jpg";
import github from "@assets/githubsearch.jpg";
import graphql from "@assets/badges/graphql.png";

const projects = [
    {
      name: "L-Night app - fullstack app",
      subtitle: "A fullstack MERN app",
      link: "https://www.l-night.com",
      info: "A fullstack app",
      image: lnightapp,
      type: "fullstack",
      gitrepo: "https://github.com/rohms/L-Nightproject-frontend",
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
        "Webpage for the L-Night group. ReactJS, hooks, CSS3, HTML5 and Material UI. Backend: NodeJS, Express and MongoDB.",
    },
    {
      name: "TechPanda mockpage",
      subtitle: "Using Bootstrap 5 with React",
      link: "https://taupe-snickerdoodle-019fb0.netlify.app",
      info: "",
      image: techpanda,
      type: "other",
      gitrepo: "https://github.com/rohms/tech-panda/",
      description:
        "Using Bootstrap to create a typical tech company landing page",
      skills: [
        {
          name: "bootstrap",
          src: bootstrap,
          alt: "bootstrap-logo",
        },
        {
          name: "react",
          src: react,
          alt: "react-logo",
        },
      ],
    },
    {
      name: "Github API - GraphQL",
      subtitle: "Using GraphQL with React",
      link: "https://thriving-sable-cd96c8.netlify.app",
      info: "",
      image: github,
      type: "other",
      gitrepo: "https://github.com/rohms/githubapi",
      description:
        "Using GraphQL to fetch data from Github API",
      skills: [
        {
          name: "graphql",
          src: graphql,
          alt: "graphql-logo",
        },
        {
          name: "react",
          src: react,
          alt: "react-logo",
        },
      ],
    },
    {
      name: "Random password generator",
      subtitle: "Practising VanillaJS",
      link: "https://luxury-lolly-f0f6f6.netlify.app/",
      info: "",
      image: randomp,
      type: "widgets",
      gitrepo: "",
      description: "Vanilla JS random password generator. Practicing VanillaJS",
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
      ],
    },
    {
      name: "Newsletter signup",
      subtitle: "Creating a signup to a newsletter",
      link: "https://enchanting-chebakia-90bcd3.netlify.app/",
      info: "Creating a signup to a newsletter",
      image: signup,
      type: "widgets",
      gitrepo: "https://github.com/rohms/newsletter-signup/",
      description: "Vanilla JS FrontendMentor challenge, creating a signup to a newsletter with validation. Mobile responsive",
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
      ],
    },
    {
      name: "Tenzies dice game",
      subtitle: "Practising React state",
      link: "https://luxury-daffodil-4a05ef.netlify.app",
      info: "",
      image: tenzies,
      type: "games",
      gitrepo: "https://github.com/rohms/tenzies",
      description: "A small dice game to practise React state",
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
          name: "react",
          src: react,
          alt: "react-logo",
        },
      ],
    },
    {
      name: "React Tic Tac Toe",
      subtitle: "Practising React",
      link: "https://neon-gnome-e9ee7d.netlify.app/",
      info: "",
      image: tictactoe,
      type: "games",
      gitrepo: "https://github.com/rohms/react-tic-tac-toe",
      description: "A Tic Tac Toe game practicing React state",
      skills: [
        {
          name: "css3",
          src: css3,
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
      name: "What's cooking? - NextJS/TS",
      subtitle: "Using NextJS with Typescript",
      link: "https://leafy-taiyaki-a809ae.netlify.app/",
      info: "",
      image: cooking,
      type: "other",
      gitrepo: "https://github.com/rohms/nextjs-fun",
      description:
        "Filtering food ingerients. Practicing NextJS with TS. Will add Edamam API later.",
      skills: [
        {
          name: "NextJS",
          src: next,
          alt: "next-js-logo",
        },
        {
          name: "typescript",
          src: TS,
          alt: "TS-logo",
        },
      ],
    },
    {
      name: "Random People Search",
      subtitle: "Implementing search and filtering",
      link: "https://storied-heliotrope-c0f833.netlify.app/",
      info: "",
      image: randomusers,
      type: "widgets",
      gitrepo: "https://github.com/rohms/random-people",
      description:
        "A random people search. You can search with first or lastname or email. Added pagination with the help of MUI components.",
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
      image: jokegen,
      type: "games",
      gitrepo: "https://github.com/rohms/dadjokegenerator",
      description:
        "Used Webpack 5, sass/scss. Axios was used for fetching the jokes. I used also the HTMLWebpackPlugin.",
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
      name: "Learning Vue Project",
      subtitle: "Learning basics of Vue",
      link: "https://deft-moonbeam-73e767.netlify.app/",
      info: "",
      image: vue,
      type: "other",
      gitrepo: "https://github.com/rohms/learning-vue",
      description: "Learning the basics of Vue with following Vue Mastery Course.",
      skills: [
        {
          name: "js",
          src: js,
          alt: "css3-logo",
        },
        {
          name: "vue",
          src: vue,
          alt: "vue-logo",
        },
      ],
    },
    {
      name: "Angular - todo list",
      subtitle: "Learning basics of Angular",
      link: "",
      info: "",
      image: mytodos,
      type: "other",
      gitrepo: "https://github.com/rohms/angular-todo",
      description:
        "Learning Angular basics with the help of Angular Crash Course 2021 by Traversy Media.",
      skills: [
        {
          name: "Angular",
          src: angular,
          alt: "next-js-logo",
        },
        {
          name: "typescript",
          src: TS,
          alt: "TS-logo",
        },
      ],
    },
    {
      name: "React TypeScript Quiz",
      subtitle: "Learning to use TypeScript with react",
      link: "https://stellar-quokka-69a049.netlify.app/",
      info: "",
      image: reactTS,
      type: "games",
      gitrepo: "https://github.com/rohms/ReactQuiz",
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

  export  {projects};