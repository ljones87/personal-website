import React from 'react';


const RebricBandA = (props) => {
  return (
    <div className="videos">
      <a href="http://rebric.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>Rebric.io</h1>
      </a>
      <div className="before">
        <h3 >Before Conversion</h3>
        <video
          className="rebric-before"
          src={'/public/videos/RebricBefore.mov'}
          controls />
      </div>
      <div className="after">
        <h3 >After Conversion</h3>
        <video
          className="rebric-after"
          src={'/public/videos/RebricAfter.mov'}
          controls />
      </div>
    </div>
  );
};

export default RebricBandA;
