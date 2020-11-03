import React, {useContext} from 'react';
import {firebaseAuth} from './provider/AuthProvider'

const Logout = (props) => {

    const {handleSignout,} = useContext(firebaseAuth)
    const { token } = useContext(firebaseAuth)

    if (localStorage.getItem('token')) {
        return <button onClick={handleSignout}>sign out </button>;
      }
      return <p>no user signed in</p>;
    }


export default Logout;