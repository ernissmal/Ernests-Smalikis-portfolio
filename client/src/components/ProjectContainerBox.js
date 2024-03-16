// ProjectContainerBox.js
import React from 'react';

function ProjectContainerBox({ imageSrc, title, description }) {
  return (
    <div className="project-container">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectContainerBox;
