import Homepage from './containers/Homepage'
import UserProfile from './containers/UserProfile'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RegisterPage from './containers/RegisterPage'
import React, { useEffect } from 'react'
import SearchPage from "./containers/SearchPage";

import {useContext} from 'react'
import {firebaseAuth} from './components/provider/AuthProvider'
import Signup from './components/Signup'


import {Redirect} from 'react-router-dom'
import Signin from './components/Signin'
import Logout from './components/Logout'
import './App.css';

export default function App() {

    const { token } = useContext(firebaseAuth)
    console.log(token)

    useEffect(() => {
        document.title = "Epic Portfolio"
    }, []);

    return (
        <Router>
            <Switch>
                {/*<Route exact path='/' render={rProps => token === null ? <Homepage /> : <Homepage />} />*/}
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/signup' component={Signup} />

                <Route exact path="/register">
                    <RegisterPage />
                </Route>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/u/:username/" children={<UserProfile />}>
                </Route>

                <Route path="/search" children={<SearchPage />}>
                </Route>
            </Switch>
        </Router>
    )
}
