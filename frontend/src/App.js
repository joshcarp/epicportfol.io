import Homepage from './containers/Homepage'
import UserProfile from './containers/UserProfile'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import RegisterPage from './containers/RegisterPage'
import React, {useEffect, useState} from 'react'
import {useContext} from 'react'
import {firebaseAuth} from './provider/AuthProvider'
import Signup from './components/Signup'




export default function App() {
    const {handleSignup} = useContext(firebaseAuth)
    console.log(handleSignup)

    return (
        <Router>
            <Switch>
                <Route exact path="/register">
                    <RegisterPage />
                </Route>

                <Route exact path="/signup">
                    <Signup />
                </Route>

                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/u/:username" children={<UserProfile />}>

                </Route>
            </Switch>
        </Router>
    )
}
