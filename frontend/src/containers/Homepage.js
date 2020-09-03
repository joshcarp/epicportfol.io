import React from 'react';
import '../App.css';
import Logo from '../assets/logo.svg'

import UserSearchBox from '../components/UserSearchBox'
import UserLoginForm from '../components/UserLoginForm'
import Button from '../components/UI/Button/Button'
import styled from 'styled-components'

function sayHello() {
    alert('You clicked me!');
}



export default function Homepage() {
    return (
        <div className="Homepage">
            <img src={Logo} className="Homepage-logo" alt="logo" />
            <h4>Find your next Epic Candidate</h4>
            <UserSearchBox />
            {/*<h1>hihhhhh</h1>*/}

            <h4>Login to your Epic Portfolio</h4>
            <UserLoginForm />
            {/*<Button*/}
            {/*    // className={classes.LoginButton}*/}
            {/*    onClick={sayHello}>Sign in</Button>*/}
            <Button onClick={sayHello}>
                Login
            </Button>
            <a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp" target="_blank">
                <Button theme = "pink">
                    Register
                </Button>
            </a>


        </div>
    )
}
