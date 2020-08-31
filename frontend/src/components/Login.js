import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react'
const { LoginRequest } = require('../proto/api_pb.js');
const { authenticateClient } = require('../proto/api_grpc_web_pb.js');
const auth = new authenticateClient('http://localhost:8081');


function Login() {
    const [message, setMessage] = useState("initial value")
    var request = new LoginRequest();
    var meta = { 'authorization': "Basic " + window.btoa('memes:more_memes') }
    auth.login(request, meta, function (err, response) {
        console.log(response.getJwt())
        setMessage(response.getJwt())
    })
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {message.toString()}
                </p>
            </header>
        </div>
    );
}


export default Login;
