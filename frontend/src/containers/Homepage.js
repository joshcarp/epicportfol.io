import React from 'react';
import '../App.css';
import Logo from '../assets/logo.svg'

import UserSearchBox from '../components/UserSearchBox'
import UserLoginForm from '../components/UserLoginForm'

export default function Homepage() {
    return (
        <div className="Homepage">
            <img src={Logo} className="Homepage-logo" alt="logo" />
            <h4>Find your next Epic Candidate</h4>
            <UserSearchBox />

            <h4>Login to your Epic Portfolio</h4>
            <UserLoginForm />

        </div>
    )
}
