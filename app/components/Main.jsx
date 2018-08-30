import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import Projects from './Projects';
import Contact from './Contact';
import TechStack from './TechStack';
import Header from './Header';

const Main = (props) => {
  return (
    <div className="body--background">
      <Navbar />
      <Header />
      <Intro />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
};

export default Main;
