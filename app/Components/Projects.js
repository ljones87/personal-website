import React from "react";
//import Project from "./Project";
import projects from "../../public/projectLinks.js";

const Projects = () => {
  return (
    <section className="project-section">
    <a name="projects" />
      <h2 className="section-title">Work</h2>
      <div className="projects">

        <div className="projects-container">
          {projects.map(project => (
            <div className="small-12 large-6">
              <a
                className={`project-image ${project.id}`}
                href={project.link}>

              </a>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
