import React, { useState } from 'react';

const ToggleContent = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h3 onClick={toggle}>{title}</h3>
      {isOpen && children}
    </div>
  );
};

export default ToggleContent;
