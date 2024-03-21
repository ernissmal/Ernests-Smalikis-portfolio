// ProgressBar.js
import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="progress-bar">
      <span className="label">{label}</span>
      <div className="progress">
        <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
