import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import Projects from './Projects';
import Resume from './Resume';
import TechStack from './TechStack';

const Main = (props) => {
  return (
    <div className="overlay-content">
    <Navbar />
    <Intro />
    <Projects />
    <TechStack />
    <Resume />
  </div>
  );
};

export default Main;
