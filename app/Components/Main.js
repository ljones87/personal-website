import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import Projects from './Projects';
import Resume from './Resume';

const Main = (props) => {
  return (
    <div className="overlay-content">
    <p className="img-beach" />
    <Navbar />
    <Intro />
    <Projects />
    <Resume />
  </div>
  );
};

export default Main;
