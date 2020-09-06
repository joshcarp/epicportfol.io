import React from 'react'
import Homepage from './containers/Homepage'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RegisterPage from './containers/RegisterPage'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/Register">
                    <RegisterPage />
                </Route>
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>
        </Router>
    )
}
