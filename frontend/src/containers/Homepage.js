import React from 'react';
import '../App.css';
import Logo from '../assets/logo.svg'

export default function Homepage() {
    return (
        <div className="Homepage">
            <img src={Logo} className="Homepage-logo" alt="logo" />
            <p>Welcome to your Epic Portfolio</p>
        </div>
    )
}
