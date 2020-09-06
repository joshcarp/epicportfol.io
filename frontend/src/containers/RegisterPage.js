import React, { Component } from 'react'

import '../App.css'
import Logo from '../assets/logo.svg'

import UserLoginForm from '../components/UserLoginForm'

class RegisterPage extends Component {
    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <div className="Homepage">
                <img src={Logo} className="Homepage-logo" alt="logo" />
                <h4>Register your Epic Portfolio</h4>
                <UserLoginForm />
            </div>
        )
    }
}

export default RegisterPage
