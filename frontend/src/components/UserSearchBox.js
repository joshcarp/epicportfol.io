import React from "react";
import PropTypes from 'prop-types';
import { TextField, withStyles } from '@material-ui/core';

const { searchClient } = require('./../proto/api_grpc_web_pb.js');
const searcher = new searchClient('http://localhost:443');
const { searchRequest } = require('./../proto/api_pb.js');

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
        this.handleinput = this.handleinput.bind(this)
    }

    handleinput(event) {
        this.setState({
            username: event.target.value,
        })
    }

    handleSubmit(event) {
        var r = new searchRequest();
        r.setTerm(this.state.username);
        searcher.search(r, {}, function (err, response) {
            console.log(response)
        })
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
                        onChange={this.handleinput}
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
