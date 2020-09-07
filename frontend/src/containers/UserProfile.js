import React from 'react';
import PropTypes from 'prop-types';
import { Paper, withStyles } from "@material-ui/core";


const styles = {
    field: {
        margin: "5px",
        background: 'white',
        width: '80%',
    },
    button: {
        margin: "5px",
        width: '80%',
    },
};


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
            <div className="UserProfilePage">
                <Paper elevation={10}>
                    <div className="UserProfilePage-container">
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
                </Paper>
            </div>
        )
    }
}

UserProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserProfile);