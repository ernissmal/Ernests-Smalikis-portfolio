// Form.js
import React from 'react';

function Form() {
  // Handle form submission here
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    // For example, you can access form data using event.target.elements
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields go here */}
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" />

      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
