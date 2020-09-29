import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react'
const { RegisterRequest } = require('../proto/api_pb.js');
const { authenticateClient } = require('../proto/api_grpc_web_pb.js');
const auth = new authenticateClient('http://localhost:8081');



function Register() {
    const [message, setMessage] = useState("initial value")
    var request = new RegisterRequest();
    request.setUserid(" memesters")
    request.setEmail(" memesters")
    request.setFullname(" memesters")
    request.setPreferredname(" memesters")
    auth.register(request, {}, function (err, response) {
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


export default Register;
