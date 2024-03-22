// Footer.js
import React from 'react';
import SocialMedia from './../SocialMedia';
import './Footer.css';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-content">
        <p>Connect with me on social media:</p>
        <SocialMedia id="footer"/>
        <p>© {new Date().getFullYear()} Ernests Smalikis. All rights reserved.</p>
      </div>
      <p id="version-control">Version: 1.4</p>
    </footer>
  );
}

export default Footer;
