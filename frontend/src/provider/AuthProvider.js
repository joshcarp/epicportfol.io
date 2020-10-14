// import React, {useState} from 'react';
import React from 'react';

import {authMethods} from '../firebase/authmethods'

const handleSignup = () => {
    // middle man between firebase and signup
    console.log('handleSignup')
    // calling signup from firebase server
    return authMethods.signup()
}

// const [inputs, setInputs] = useState({email: '', password: ''})
// const [errors, setErrors] = useState([])
// const [token, setToken] = useState(null)


const AuthProvider = (props) => {
    return (
        <firebaseAuth.Provider
            value={{
                //replaced test with handleSignup
                // handleSignup,
                // inputs,
                // setInputs,
                handleSignup

            }}>
            {props.children}

        </firebaseAuth.Provider>
    );
};


export const firebaseAuth = React.createContext();


export default AuthProvider;