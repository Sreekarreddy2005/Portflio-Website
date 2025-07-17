import React from 'react';

const Loader = () => (
  <div className="loader-overlay">
    <div className="loader-circle">
      <svg width="100" height="100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#d3d3d3"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#7fffd4"
          strokeWidth="8"
          fill="none"
          strokeDasharray="251.2"
          strokeDashoffset="200"
          strokeLinecap="round"
          className="loader-arc"
        />
      </svg>
    </div>
    <div className="loader-text">LOADING</div>
    <div className="loader-name">Sreekar</div>
  </div>
);

export default Loader;
