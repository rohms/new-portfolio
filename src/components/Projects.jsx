import React, { useState } from "react";
import { projects } from "./ProjectsData"
import { Card } from "./Card";
import { MySelect } from "./MySelect";

const Projects = () => {
  const [myproject, setMyProject] = useState('');

  const filteredProjects = myproject ? projects.filter((project) => project.type === myproject) : projects;

  return (
      <section id="projects">
        <div className="projects__search-divider">
          <div className="projects-container__info">
              <h1 className="gradient">Apps and projects I have built</h1>
              <p>Click on the card image to open in a new window</p>
              <MySelect project={myproject} setProject={setMyProject} />
          </div>
          <hr className="icon"  />
        </div>
        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <Card
              key={project.name}
              card={{
                ...project,
              }}
            />
          ))}
        </div>
      </section>
  );
};

export { Projects };
