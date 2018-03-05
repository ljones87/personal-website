
import './styles/index.scss';
import Project from './Components/Project';
import React from 'react';
import ReactDOM from 'react-dom';
import projects from '../public/projectLinks.js';
import Main from './Components/Main';


const App = () => {
    return (
      <div>
      <Main />
        {/*
          projects.map(project => <Project key={project.name} data={project} />)
        */ }
      </div>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
