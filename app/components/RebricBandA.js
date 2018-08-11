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
      <h3>Before Conversion</h3>
      <video
        className="rebric-before"
        src={'/public/videos/RebricBefore.mov'}
        controls />
        <h3>after Conversion</h3>
      <video
        className="rebric-after"
        src={'/public/videos/RebricAfter.mov'}
        controls />

    </div>
  );
};

export default RebricBandA;
