
// add useContext
import React, {useContext} from 'react';
import {firebaseAuth} from '../components/provider/AuthProvider'
import PropTypes from 'prop-types'
import { TextField, withStyles, Button } from '@material-ui/core'
import { Redirect } from 'react-router'

const Signin = () => {

    const {handleSignin, inputs, setInputs, errors} = useContext(firebaseAuth)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handleSubmit')
        handleSignin()

    }
    const handleChange = e => {
        const {name, value} = e.target
        console.log(inputs)
        setInputs(prev => ({...prev, [name]: value}))
    }

    return (
        <form onSubmit={handleSubmit}>
           
            {/* make inputs  */}
             
            <TextField variant="outlined" onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
            <TextField variant="outlined" onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
            <Button
                        
                        type="submit"
                        
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