import React from 'react';


const Project = (props) => {
  //props handed down from index.js
  const { data } = props;
  return (

      <a href={data.link}
      className={`project-box ${data.id}`}>
        <p className="img" />
        <h3>{data.name}</h3>
      </a>

  );
};

export default Project;
