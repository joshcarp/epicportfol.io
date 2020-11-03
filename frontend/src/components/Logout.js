import React, {useContext} from 'react';
import {firebaseAuth} from './provider/AuthProvider'

const Logout = (props) => {

    const {handleSignout,} = useContext(firebaseAuth)
    const { token } = useContext(firebaseAuth)

    if (token === null) {
        return <p>no user signed in</p>;
      }
      return <button onClick={handleSignout}>sign out </button>;
    }


export default Logout;