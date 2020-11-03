import React, {useContext} from 'react';
import {firebaseAuth} from '../components/provider/AuthProvider'
import { Button } from '@material-ui/core'

const { loginRequest } = require('../proto/api_pb.js')
const { authenticateClient } = require('../proto/api_grpc_web_pb.js')
const auth = new authenticateClient('https://authenticate.epicportfol.io')

const Signin = () => {


    const {handleSignin, inputs, setInputs, errors} = useContext(firebaseAuth)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handleSubmit')
        handleSignin()
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
    const handleChange = e => {
        const {name, value} = e.target
        console.log(inputs)
        setInputs(prev => ({...prev, [name]: value}))
    }

    return (
        <form onSubmit={handleSubmit}>
            Signin
            {/* make inputs  */}
            <input onChange={handleChange} name="email" placeholder='Email' value={inputs.email} />
            <input onChange={handleChange} name="password" type='password' placeholder='Password' value={inputs.password} />
            <Button
                        type="submit"
                        name="Submit"
                        variant="contained"
                        color="primary"
                    >
                        {' '}
                        Login{' '}
            </Button>
            <Button
                        variant="contained"
                        color="secondary"
                        href="/register"
                    >
                        {' '}
                        Register{' '}
            </Button>
            {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}
        </form>
    );
};

export default Signin;