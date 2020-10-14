import React, {useContext} from 'react';
import {firebaseAuth} from '../provider/AuthProvider'


// const {handleSignup, inputs, setInputs} = useContext(firebaseAuth)

// const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('handleSubmit')
//
// }
// const handleChange = e => {
//     const {name, value} = e.target
//     console.log(inputs)
//     setInputs(prev => ({...prev, [name]: value}))
// }


const Signup = () => {




    return (
        // <form onSubmit={handleSubmit}>
        //     {/* replace the div tags with a form tag */}
        //     Signup
        //     {/* make inputs  */}
        //     <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
        //     <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
        //     <button>signup</button>
        // </form>
        <div>
            Signup
        </div>
    );
};

export default Signup;