import React from 'react';


const Project = (props) => {
  //props handed down from index.js
  const { data } = props
  return (
    <div className="project-box" >

      <a href={data.link}>
        <img src={data.img} />
        <h3>{data.name}</h3>
      </a>
    </div>
  )

}

export default Project;
