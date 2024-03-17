import React from 'react';
// Import specific icons from react-icons
import { FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

function SocialMedia() {
  const socialLinks = [
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com/ESmalikis' },
    { name: 'Facebook', icon: <FaYoutube />, url: 'https://youtube.com/ESmalikis' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://linkedin.com/in/yourusername' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/erenesto_smalikis' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/ernissmal' },
  ];

  return (
    <div className="social-media">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name} className="social-link">
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
