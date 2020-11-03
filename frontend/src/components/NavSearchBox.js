import React from "react";
import PropTypes from 'prop-types';
import { withStyles, InputBase, Paper } from '@material-ui/core';
import { Redirect } from 'react-router'


const styles = {
    form: {

    },
    field: {
        background: 'white',
        width: '80%',
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: '10px',
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
};

// Component to create text box that redirects to profile of desired user
// or to search results page of potential users.
class UserSearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            isValid: true,
            fireRedirect: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleinput = this.handleinput.bind(this)
    }

    handleinput(event) {

        this.setState({
            username: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.setState({
            fireRedirect: true
        })
    }


    render() {
        const { fireRedirect } = this.state;
        var { username } = this.state;
        const { classes } = this.props;
        username = "/search?term=" + username
        return (
            <div className="UserSearchBox">
                <form onSubmit={this.handleSubmit} className={classes.form}>
                    <Paper component="form" className={classes.root} elevation={0}>
                        <InputBase
                            id="user-search-field"
                            name="username"
                            type="search"
                            onChange={this.handleinput}
                            className={classes.input}
                            placeholder="Looking for someone?"
                            inputProps={{ 'aria-label': 'nav user search' }}
                        />
                    </Paper>
                </form>
                {fireRedirect && (
                    <Redirect to={username}></Redirect>
                )}
            </div>
        );
    }
}

UserSearchBox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserSearchBox);