// Footer.js
import React from 'react';
import './Footer.css'; // Assuming you might want to style your footer

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-content">
        <p>Connect with me on social media:</p>
        <ul className="social-media-list">
          <li><a href="https://twitter.com/ESmalikis" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://github.com/ernissmal" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/ernests-smaliķis" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          {/* Add more social media links as needed */}
        </ul>
        <p>Email: smalikisernests@gmail.com</p>
        <p>© {new Date().getFullYear()} Ernests Smalikis. All rights reserved.</p>
      </div>
      <p id="version-control">Version: 2.0</p>
    </footer>
  );
}

export default Footer;
