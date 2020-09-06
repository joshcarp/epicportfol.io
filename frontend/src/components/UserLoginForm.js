import React from 'react'
const { LoginRequest } = require('../proto/api_pb.js')
const { authenticateClient } = require('../proto/api_grpc_web_pb.js')
const auth = new authenticateClient('http://localhost:8081')

// Component to create form that logs user into their profile and redirects
// to profile page.
class UserLoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            username: '',
            token: '',
        }
        this.handleUname = this.handleUname.bind(this)
        this.handlepwd = this.handlepwd.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleUname(event) {
        this.setState({
            username: event.target.value,
        })
    }
    handlepwd(event) {
        this.setState({
            password: event.target.value,
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        var request = new LoginRequest()
        var meta = {
            authorization:
                'Basic ' +
                window.btoa(this.state.username + ':' + this.state.password),
        }
        auth.login(request, meta, function (err, response) {
            err != null
                ? console.log(err.code, err.message)
                : localStorage.setItem('token', response.getJwt())
            console.log(localStorage)
            // console.log(err.code, err.message)//, response.getJwt())
        })
    }
    render() {
        return (
            <div className="UserLoginForm">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleUname}
                        placeholder="Username"
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handlepwd}
                        placeholder="Password"
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UserLoginForm
