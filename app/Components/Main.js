import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import Projects from './Projects';
import Contact from './Contact';
import TechStack from './TechStack';

const Main = (props) => {
  return (
    <div className="overlay-content">
      <Navbar />
      <Intro />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
};

export default Main;
