import React, {useState} from "react";
const { LoginRequest } = require('../proto/api_pb.js');
const { authenticateClient } = require('../proto/api_grpc_web_pb.js');
const auth = new authenticateClient('http://localhost:8081');

// Component to create form that logs user into their profile and redirects
// to profile page.
class UserLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: 'oiwhetohiwerwerkjwner werwer ',
            username: 'askfjnakjsnljkdsn werwer '
        };

        this.handleUname = this.handleUname.bind(this);
        this.handlepwd = this.handlepwd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUname(event) {

        this.setState({
            username: event.target.username,
        });
    }
    handlepwd(event) {

        this.setState({
            password: event.target.password,
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        var request = new LoginRequest();
        var meta = { 'authorization': "Basic " + window.btoa(this.state.username+':'+this.state.password) }
        auth.login(request, meta, function (err, response) {
            console.log(response)
        })
    }


    render() {
        return (
            <div className="UserLoginForm">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleUname}/>
                    <br />
                    <input type="password" name="password" value={this.state.password} onChange={this.handlepwd}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default UserLoginForm;
