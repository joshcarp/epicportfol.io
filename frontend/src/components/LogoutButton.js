import React from 'react'
import { Button } from "@material-ui/core"
import { useHistory } from 'react-router'

export default function LogoutButton(props) {
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem("token")
        props.setIsLoggedIn(false)
        console.log(localStorage.getItem("token"))

        // Return to home page
        history.push("/")
    }

    return (
        <>
            <Button
                color="secondary"
                variant="contained"
                onClick={logout}
            >
                Logout
            </Button>
        </>
    )
}