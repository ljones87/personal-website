import React from 'react';

const TechStack = () => {
  return (
    <div className="tech">
      <a name="tech" />

      <img
        className="header--tech"
        src="https://static1.squarespace.com/static/50eca855e4b0939ae8bb12d9/t/5625502ae4b07a661c42bea4/1404689237150/?format=750w"
      />
      <div className="tech-icos">
        <i className="devicon-javascript-plain colored dev-1" />
        <i className="devicon-react-original colored dev-2" />
        <i className="devicon-nodejs-plain-wordmark colored dev-3" />
        <i className="devicon-github-plain colored dev-4" />
        <i className="devicon-webpack-plain colored dev-5" />
        <i className="devicon-html5-plain colored dev-6" />
        <i className="devicon-sass-original colored dev-7" />
        <i className="devicon-mocha-plain colored dev-8" />
        <i className="devicon-postgresql-plain colored dev-9" />
        <i className="devicon-sequelize-plain colored dev-10" />
        <i className="devicon-babel-plain colored dev-11" />
        <i className="devicon-d3js-plain colored dev-12" />
        {/*<i className="devicon-docker-plain colored" />*/}
      </div>
    </div>
  );
};

export default TechStack;
