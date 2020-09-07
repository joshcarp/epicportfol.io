import React from 'react'
import Homepage from './containers/Homepage'
import UserProfile from './containers/UserProfile'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RegisterPage from './containers/RegisterPage'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/Register">
                    <RegisterPage />
                </Route>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/profile">
                    <UserProfile />
                </Route>
            </Switch>
        </Router>
    )
}
