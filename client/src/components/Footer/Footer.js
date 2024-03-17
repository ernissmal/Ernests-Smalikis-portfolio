// Footer.js
import React from 'react';
import './Footer.css'; // Assuming you might want to style your footer

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-content">
        <p>Connect with me on social media:</p>
        <ul className="social-media-list">
          <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          {/* Add more social media links as needed */}
        </ul>
        <p>Email: your.email@example.com</p>
        <p>© {new Date().getFullYear()} Your Name or Your Company's Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
