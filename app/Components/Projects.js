import React from "react";
//import Project from "./Project";
import projects from "../../public/projectLinks.js";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        {projects.map(project => (
          <div className={`project-box-${project.id}`}>
            <h3 className="proj-name hidden">{project.name}</h3>
            <a href={project.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
