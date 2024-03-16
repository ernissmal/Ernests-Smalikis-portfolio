import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <Logo />
                <Navigation />
                <div className="social-links">
                    <a href="https://twitter.com/ESmalikis" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/erenesto_smalikis" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@ESmalikis" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                    <a href="https://github.com/ernissmal" aria-label="GitHub"><i className="fab fa-github"></i></a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
