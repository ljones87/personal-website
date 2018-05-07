import React from "react";
//import Project from "./Project";
import projects from "../../public/projectLinks.js";

const Projects = () => {
  return (
    <section className="project-section">
      <div className="projects">
        <a name="projects" />
        <div className="projects-container">
          {projects.map(project => (
            <header>
            <div>
              <h3
                className="project-title"
                key={project.link}>
                <a
                  href={project.link}
                  className={`project-box-${project.id}`}>
                  {project.name}
                </a>
              </h3>
            </div>
            </header>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
