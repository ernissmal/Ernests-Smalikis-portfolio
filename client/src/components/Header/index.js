import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <Logo />
                <Navigation />
            </nav>
        </header>
    );
}

export default Header;
