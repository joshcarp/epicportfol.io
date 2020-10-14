import React from 'react';

const AuthProvider = (props) => {
    return (
        <firebaseAuth.Provider
            value={{
                test: "context is working"
            }}>
            {props.children}

        </firebaseAuth.Provider>
    );
};


export const firebaseAuth = React.createContext()


export default AuthProvider;