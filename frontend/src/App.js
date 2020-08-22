import React from 'react';
import logo from './logo.svg';
import './App.css';

const {EchoRequest, EchoResponse} = require('./proto/api_pb.js');
const {EchoServiceClient} = require('./proto/api_grpc_web_pb.js');
var echoService = new EchoServiceClient('http://localhost:8081');




function App() {
    var request = new EchoRequest();
    request.setMessage("Pew Pew Pew")
    echoService.echo(request, {}, function (err, response) {
        console.log(response.getMessage())
    });
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {}
                </p>
            </header>
        </div>
    );
}

export default App;
