
import React, { Component } from 'react';

import '../App.css';
import Logo from '../assets/logo.svg'

import UserSearchBox from '../components/UserSearchBox'
import UserLoginForm from '../components/UserLoginForm'
import Button from '../components/UI/Button/Button'
import Toolbar from '../components/Navigation/Toolbar/Toolbar'
import Aux from '../hoc/Aux'
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer'
import classes from './Homepage.css'


function sayHello() {
    alert('You clicked me!');
}

class Homepage extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <div className="Homepage">


                        <Aux>
                            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                            <SideDrawer
                                open={this.state.showSideDrawer}
                                closed={this.sideDrawerClosedHandler} />
                            <main className={classes.Content}>
                                {this.props.children}
                            </main>

                        </Aux>


            <img src={Logo} className="Homepage-logo" alt="logo" />
            <h4>Find your next Epic Candidate</h4>
            <UserSearchBox />

            <h4>Login to your Epic Portfolio</h4>
            <UserLoginForm />

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
}

export default Homepage;

