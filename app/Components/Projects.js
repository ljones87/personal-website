import React from 'react';
import Project from './Project';
import projects from '../../public/projectLinks.js';

const Projects = () => {
  return (
    <div className="projects-container">
    {
      projects.map(project => (
        <Project
          key={project.name}
          data={project}
        />
      ))
    }
    </div>
  );
};

export default Projects;
