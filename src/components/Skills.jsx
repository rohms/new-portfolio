import React from "react";
import CSS3 from "@assets/badges/css.svg";
import HTML5 from "@assets/badges/html.svg";
import JS from "@assets/badges/javascriptlogo.png";
import Figma from "@assets/badges/Figmalogo.svg";
import ReactLogo from "@assets/badges/react.svg";
import Story from "@assets/badges/storybook.png";
import TS from "@assets/badges/typescript.png";
import Vite from "@assets/badges/vitelogo.png";
import ReactTesting from "@assets/badges/testinglibrary.svg";
import graphql from "@assets/badges/graphql.png";
import vue from "@assets/badges/vue.svg";
import bootstrap from "@assets/badges/bootstrap.svg";
import ai from "@assets/ai.png"
import "../styles/skills.css";

import { Badge } from "./Badge";

const skillBadges = [
  { imgSrc: CSS3, alt: "css-logo", tag: "css" },
  { imgSrc: HTML5, alt: "html 5", tag: "html" },
  { imgSrc: JS, alt: "javascript logo", tag: "javascript" },
  { imgSrc: ReactLogo, alt: "react logo", tag: "react" },
  { imgSrc: TS, alt: "typescript-logo", tag: "typescript" },
  { imgSrc: Figma, alt: "figma-logo", tag: "figma" },
  { imgSrc: Story, alt: "storybook-logo", tag: "storybook" },
  { imgSrc: Vite, alt: "vite-logo", tag: "vite" },
  { imgSrc: ReactTesting, alt: "react testing library logo", tag: "RTL" },
  { imgSrc: graphql, alt: "graphql", tag: "graphql" },
  { imgSrc: vue, alt: "vue", tag: "vue" },
  { imgSrc: bootstrap, alt: "bootstrap", tag: "bootstrap" },
];

const Skills = () => {
  return (
    <>
      <section id="skills" >
       <div className="wrapper">
        <div className="section-skills max-text">
        <h1 className="gradient">Skills &amp; Technologies</h1>
        
        <p>
          I have worked mostly with React and JavaScript. Fetching,
          manipulating and displaying data. Aligning buttons and boxes and making things look pretty. Creating oldschool Email templates with HTML for email providers. Finding my way in the React hooks jungle. Knowing how to keep things type safe with TypeScript. I learned how to kill your dear divs, it's not like sprinkling salt on top of your food. If you put too much, it's not good for you. 🍕
        </p>
        <p>
          I use Figma. Storybook is a home for your components. Making React apps quick
          with Vite! (Never going back to create-react-apps!) Did write tests with Vitest, and React Testing Library to catch those little bugs! Tracking issues in Sentry. Knowing that Cypress does not stand only for a tree. 🧐
        </p>
        <p>
          Currently learning GraphQL queries and mutations and RTK (Redux
          Toolkit) for state management. Honing my JS skills. Lately been busy with Cypress and PHP. Learning never ends says the wise one. 🧙‍♀️
        </p>
        
        </div>
        <img src={ai} alt="neural network" className="neural" />
        {/* Image by <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3685928">Gerd Altmann</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3685928">Pixabay</a> */}
        </div>
      <div className="skills-badges">
        <h2 className="badges-header gradient">
          Libraries and frameworks I have worked with:
        </h2>

        <div className="badges">
          {skillBadges.map((skill) => (
            <Badge
              key={skill.alt}
              imageSrc={skill.imgSrc}
              altText={skill.alt}
              tag={skill.tag}
            />
          ))}
        </div>
        </div>
      </section>
    </>
  );
};

export { Skills };
