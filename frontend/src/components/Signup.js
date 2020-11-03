
// add useContext
import React, {useContext} from 'react';
import {firebaseAuth} from '../components/provider/AuthProvider';
import {withRouter} from 'react-router-dom'
import { TextField, withStyles, Button } from '@material-ui/core'

const Signup = (props) => {


    const {handleSignup, inputs, setInputs, errors} = useContext(firebaseAuth)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('handleSubmit')
        //wait to signup
        await handleSignup()
        //push home
        props.history.push('/')
    }
    const handleChange = e => {
        const {name, value} = e.target
        console.log(inputs)
        setInputs(prev => ({...prev, [name]: value}))
    }

    return (
        <form onSubmit={handleSubmit}>
            
            {/* make inputs  */}
            <TextField onChange={handleChange} variant="outlined" name="name" placeholder='Full Name' />
            <TextField onChange={handleChange} variant="outlined" name="preferred" placeholder='Preferred Name'  />
            <TextField onChange={handleChange} variant="outlined" name="email" placeholder='Email' value={inputs.email} />
            <TextField onChange={handleChange} variant="outlined" name="username" placeholder='Username' value={inputs.username} />
            <TextField onChange={handleChange} variant="outlined" name="password" placeholder='Password' value={inputs.password} />
            <Button
                        
                        type="submit"
                        name="Submit"
                        variant="contained"
                        color="secondary"
                    >
                        Register
                    </Button>
            {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}
        </form>
    );
};

export default withRouter(Signup);