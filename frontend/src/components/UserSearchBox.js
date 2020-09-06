import React from "react";
import PropTypes from 'prop-types';
import { TextField, withStyles } from '@material-ui/core';


const styles = {
    form: {

    },
    field: {
        background: 'white',
        width: '80%',
    },
};

// Component to create text box that redirects to profile of desired user
// or to search results page of potential users.
class UserSearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            isValid: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        // TODO: USER SEARCH REDIRECT FUNCTIONALITY
    }


    render() {
        const { classes } = this.props;
        return (
            <div className="UserSearchBox">
                <form onSubmit={this.handleSubmit} className={classes.form}>
                    <TextField
                        className={classes.field}
                        id="user-search-field"
                        label="Looking for someone?"
                        variant="outlined"
                        name="username"
                        type="search"
                    />
                </form>
            </div>
        );
    }
}

UserSearchBox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserSearchBox);