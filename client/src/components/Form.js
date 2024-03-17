// Form.js
import React, { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [joinMailingList, setJoinMailingList] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submit action
    // Here you would handle the submission, e.g., sending data to a server
    console.log(`Email: ${email}, Name: ${name}, Message: ${message}, Join Mailing List: ${joinMailingList}`);
    // Reset form fields after submission for a better UX
    setEmail('');
    setName('');
    setMessage('');
    setJoinMailingList(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="joinMailingList">
          <input
            type="checkbox"
            id="joinMailingList"
            checked={joinMailingList}
            onChange={(e) => setJoinMailingList(e.target.checked)}
          />
          Join our mailing list?
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
