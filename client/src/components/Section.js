// Section.js
import React from 'react';
import './Section.css';

function Section({ title, header, content }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      {header && <div className="header">{header}</div>}
      <div className="content">{content}</div>
    </div>
  );
}

export default Section;
