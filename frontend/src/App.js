import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
const {EchoRequest} = require('./proto/api_pb.js');
const {EchoServiceClient} = require('./proto/api_grpc_web_pb.js');
const echoService = new EchoServiceClient('http://localhost:8081');


function App() {
    const [message, setMessage] = useState("initial value")
    var request = new EchoRequest();
    request.setMessage(" memesters")
    echoService.echo(request, {}, function (err, response) {
        console.log(response.getMessage())
        setMessage(response.getMessage())
    })
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {message.toString()}
                </p>
            </header>
        </div>
    );
}


export default App;
