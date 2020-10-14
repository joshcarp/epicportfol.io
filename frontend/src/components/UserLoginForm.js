import React from 'react'
import PropTypes from 'prop-types'
import { TextField, withStyles, Button } from '@material-ui/core'

const { loginRequest } = require('../proto/api_pb.js')
const { authenticateClient } = require('../proto/api_grpc_web_pb.js')
const auth = new authenticateClient('https://authenticate.epicportfol.io')

const styles = {
    form: {},
    field: {
        margin: '5px',
        background: 'white',
        width: '80%',
    },
    button: {
        margin: '5px',
        width: '80%',
    },
}

// Component to create form that logs user into their profile and redirects
// to profile page.
class UserLoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            username: '',
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
        var request = new loginRequest()
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
        const { classes } = this.props
        return (
            <div className="UserLoginForm">
                <form onSubmit={this.handleSubmit} className={classes.form}>
                    <TextField
                        className={classes.field}
                        id="username-field"
                        label="Username"
                        variant="outlined"
                        name="username"
                        type="text"
                        onChange={this.handleUname}
                    />

                    <TextField
                        className={classes.field}
                        id="password-field"
                        label="Password"
                        variant="outlined"
                        name="password"
                        type="password"
                        onChange={this.handlepwd}
                    />

                    <br />
                    <Button
                        className={classes.button}
                        type="submit"
                        name="Submit"
                        variant="contained"
                        color="primary"
                    >
                        {' '}
                        Login{' '}
                    </Button>
                    <Button
                        className={classes.button}
                        type="submit"
                        name="Submit"
                        variant="contained"
                        color="secondary"
                        href="/register"
                    >
                        {' '}
                        Register{' '}
                    </Button>
                </form>
            </div>
        )
    }
}

UserLoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(UserLoginForm)
