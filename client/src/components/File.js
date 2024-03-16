// File.js
import React from 'react';

function File() {
  // Handle file selection here
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    // Add your file handling logic here
    // For example, you can access file data using FileReader API
  };

  return (
    <div>
      {/* File input */}
      <input type="file" onChange={handleFileSelect} />
    </div>
  );
}

export default File;
