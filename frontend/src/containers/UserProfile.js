import React from 'react';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            bioTitle: '',
            bioBody: '',
        };
    }

    async fetchUserData(username) {
        // TODO: FETCH USER PROFILE DATA FROM BACKEND

        // PLACEHOLDER
        this.setState({
            fullName: "John Smith",
            bioTitle: "Epic Placeholder",
            bioBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam ultrices magna vitae tempus. Nunc venenatis diam velit, eu vestibulum felis pellentesque id."
        })
    }

    // React hook to retrieve user data from backend
    componentDidMount() {
        this.fetchUserData(this.props.username);
    }

    render() {
        return (
            <div className="UserProfile">
                <div className="UserProfile-image">
                    <p>[Profile photo component here]</p>
                </div>

                <div className="UserProfile-name">
                    <p>Name: {this.state.fullName}</p>
                </div>

                <div className="UserProfile-bio">
                    <h1>bio-title: {this.state.bioTitle}</h1>

                    <p>bio-body: {this.state.bioBody}</p>
                </div>
            </div>
        )
    }
}

export default UserProfile;