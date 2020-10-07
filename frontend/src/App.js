import Homepage from './containers/Homepage'
import UserProfile from './containers/UserProfile'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RegisterPage from './containers/RegisterPage'
import React, { useEffect, useState } from 'react'
import SearchPage from "./containers/SearchPage";

export default function App() {
    useEffect(() => {
        document.title = "Epic Portfolio"
    }, []);

    return (
        <Router>
            <Switch>
                <Route exact path="/register">
                    <RegisterPage />
                </Route>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/u/:username" children={<UserProfile />}>
                </Route>
                <Route path="/search" children={<SearchPage />}>
                </Route>
            </Switch>
        </Router>
    )
}
