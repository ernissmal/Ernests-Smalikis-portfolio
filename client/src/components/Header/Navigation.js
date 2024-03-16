// src/components/Header/Navigation.js
import React from 'react';
import Button from '../Button'; // Adjust the import path as necessary

function Navigation() {
    return (
        <ul className="navigation">
            <li><Button href="#about" text="About" /></li>
            <li><Button href="#portfolio" text="Portfolio" /></li>
            <li><Button href="#contacts" text="Contacts" /></li>
            <li><Button href="action" text="Book a consultation"/></li>
        </ul>
    );
}

export default Navigation;
