import React from "react";
import CSS3 from "@assets/badges/css3.svg";
import HTML5 from "@assets/badges/html5.svg";
import JS from "@assets/badges/javascript-logo.png";
import Figma from "@assets/badges/Figma-logo.svg";
import ReactLogo from "@assets/badges/react.svg";
import Story from "@assets/badges/storybook.png";
import TS from "@assets/badges/typescript.png";
import Vite from "@assets/badges/vite-logo.png";
import ReactTesting from "@assets/badges/testing-library.svg";
import "../styles/skills.css";
import { Badge } from "./Badge";
import { Tooltip } from "@mui/material";

const skillBadges = [
  { imgSrc: CSS3, alt: "css-logo" },
  { imgSrc: HTML5, alt: "html 5" },
  { imgSrc: JS, alt: "javascript logo" },
  { imgSrc: ReactLogo, alt: "react logo" },
  { imgSrc: TS, alt: "typescript-logo" },
  { imgSrc: Figma, alt: "figma-logo" },
  { imgSrc: Story, alt: "storybook-logo" },
  { imgSrc: Vite, alt: "vite-logo" },
  { imgSrc: ReactTesting, alt: "react testing library logo" },
];

const Skills = () => {
  return (
    <>
      <section id="skills" className="section-skills">
        <h1>Skills &amp; Technologies</h1>
        <p>
          I have worked mostly with React and JavaScript. Fetching data,
          manipulating and displaying it. Aligning and making things look pretty
          with CSS. Creating oldschool Email templates with HTML so that every
          email provider can open them. Knowing how to keep things type safe
          with TypeScript.
        </p>
        <p>
          Learning how to use Figma dynamically and how to fetch Figma via API.
          Using Storybook as a library for components. Making React apps quick
          with Vite! (Never going back to create-react-apps only!) Learning to
          write tests with Vitest and React Testing Library to catch those
          little bugs! 🧐
        </p>
        <p>
          Currently learning GraphQL queries and mutations and RTK (Redux
          Toolkit) for state management.
        </p>

        <h2 className="section-skills__subheader">
          Some libraries and frameworks I have been working with:
        </h2>

        <div className="section-skills__badges">
          {skillBadges.map((skill) => (
            <Badge
              key={skill.alt}
              imageSrc={skill.imgSrc}
              altText={skill.alt}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export { Skills };
