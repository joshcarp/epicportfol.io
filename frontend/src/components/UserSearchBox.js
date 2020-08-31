import React from "react";

// Component to create text box that redirects to profile of desired user
// or to search results page of potential users.
class UserSearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        this.setState({
            username: event.target.username,
        });
    }

    async handleSubmit(event) {
        // TODO: USER SEARCH REDIRECT FUNCTIONALITY
    }

    render() {
        return (
            <div className="UserSearchBox">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Looking for someone?" />
                </form>
            </div>
        );
    }
}

export default UserSearchBox;