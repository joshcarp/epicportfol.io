import React, { useState } from 'react'
import Homepage from './containers/Homepage'
import UserProfile from './containers/UserProfile'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RegisterPage from './containers/RegisterPage'
import { useEffect } from 'react';
const yaml = require('js-yaml');

export default function App() {
    const [profile, setProfile] = useState(null);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()

    useEffect(() => {
        setProfile(yaml.safeLoad(`FullName: Joshua Carpeggiani
Email: josh@joshcarp.com
ProfilePic: string
Bio: |
    What ever 123456
Timeline:
    - Title: Software engineer
      Start: 2019
      End: 2020
      Company: akfhdkasdaskj
      Description: Beep boop whatevs
    - Title: Memester
      Start: 2008
      End: 2020
      Company: akfhdkasdaskj
      Description: Beep boop whatevs`));
    }, [])
    if (profile == null) {
        return <div>Loading...</div>;
    }
    console.log(profile);
    return (
        <Router>
            <Switch>
                <Route exact path="/register">
                    <RegisterPage />
                </Route>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/profile">
                    <UserProfile profile={profile} />
                </Route>
            </Switch>
        </Router>
    )
}
