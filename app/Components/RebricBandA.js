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
      <video
        className="rebric-before"
        src={'/public/videos/RebricBefore.mov'}
        controls />
        <video
          className="rebric-after"
          src={'/public/videos/RebricAfter.mov'}
          controls />

    </div>
  );
};

export default RebricBandA;
