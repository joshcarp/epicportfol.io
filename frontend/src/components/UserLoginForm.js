import React from "react";

// Component to create form that logs user into their profile and redirects
// to profile page.
class UserLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        this.setState({
            username: event.target.username,
            password: event.target.password
        });
    }

    async handleSubmit(event) {
        // TODO: USER LOGIN FUNCTIONALITY
    }

    render() {
        return (
            <div className="UserLoginForm">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" required />
                    <br />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required />
                </form>
            </div>
        );
    }
}

export default UserLoginForm;