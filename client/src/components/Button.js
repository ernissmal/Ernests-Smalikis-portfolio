// src/components/Button.js
import React from 'react';
import './Button.css';

function Button({ href, text }) {
    return (
        <a href={href} className="button-style">
            {text}
        </a>
    );
}

export default Button;
