<<<<<<< HEAD
import React from 'react'
import Homepage from './containers/Homepage'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RegisterPage from './containers/RegisterPage'
=======
import React from 'react';
import Homepage from './containers/Homepage';
import UserProfile from './containers/UserProfile';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

>>>>>>> Add basic user profile skeleton

export default function App() {
    return (
        <Router>
            <Switch>
<<<<<<< HEAD
                <Route path="/Register">
                    <RegisterPage />
                </Route>
                <Route path="/">
=======
                <Route exact path="/">
>>>>>>> Add basic user profile skeleton
                    <Homepage />
                </Route>
                <Route exact path="/profile">
                    <UserProfile />
                </Route>
            </Switch>
        </Router>
    )
}
