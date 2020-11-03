import React, { Component } from 'react'
import { Paper } from '@material-ui/core'

import '../App.css'
import Logo from '../assets/logo.svg'

import UserSearchBox from '../components/UserSearchBox'
import UserLoginForm from '../components/UserLoginForm'
import Nav from './Nav.js'
import Signin from '../components/Signin'
import Signup from '../components/Signup'

class Homepage extends Component {
    state = {
        showSideDrawer: false,
    }

    render() {
        return (
            <>
                <Nav />
                <div className="Homepage">
                    <img src={Logo} className="Homepage-logo" alt="logo" />
                    <Paper elevation={3}>
                        <h5>Find your next Epic Candidate</h5>
                        <UserSearchBox />
                        <br />
                    </Paper>
                    <br />
                    <Paper elevation={3}>
                        <h5>Login to your Epic Portfolio</h5>
                        <Signin />
                        <br />
                    </Paper>
                    <br />
                </div>
            </>
        )
    }
}

export default Homepage
