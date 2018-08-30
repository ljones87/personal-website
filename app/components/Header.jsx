import React from 'react';
import Particles from 'react-particles-js';
import particleParams from './particleparams';

const Header = () => {
  return (
    <div className="header">
    <Particles
      className="particles"
      height="100vh"
      width="100vw"
      canvasClassName="particle--canvas"
      params={particleParams}
    />
    </div>
  )
}

export default Header;
