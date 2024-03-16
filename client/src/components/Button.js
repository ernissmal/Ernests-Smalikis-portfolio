// src/components/Button.js
import React from 'react';

function Button({ href, text }) {
    return (
        <a href={href} className="button-style">
            {text}
        </a>
    );
}

export default Button;
