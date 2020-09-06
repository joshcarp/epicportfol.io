import React from 'react';
import Homepage from './containers/Homepage';
import FakeUser from './containers/FakeUser';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"


export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>
        </Router>
    )
}
