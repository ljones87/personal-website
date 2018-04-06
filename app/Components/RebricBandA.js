import React from 'react';


const RebricBandA = (props) => {
  return (
    <div>
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
