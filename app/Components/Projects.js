import React from "react";
//import Project from "./Project";
import projects from "../../public/projectLinks.js";

const Projects = () => {
  return (
    <div className="projects">
      <a name="projects" />
      <div className="projects-container">
        {projects.map(project => (
          <a
            href={project.link}
            className={`project-box-${project.id}`}
            key={project.link}>
              <h3 className="proj-name hidden">{project.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
