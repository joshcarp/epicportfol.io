import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Timeline from '../components/Timeline'

import { makeStyles, Grid, Paper } from '@material-ui/core'
import UserInfoCard from '../components/UserInfoCard'
import ImageBox from '../components/ImageBox'
import ProfileEditor from '../components/Editor'
import PopModal from '../components/PopModal'
import Nav from '../containers/Nav'

const { profilesClient } = require('./../proto/api_grpc_web_pb.js')
const profiles = new profilesClient('http://localhost:443')
const { getuserRequest, profile } = require('./../proto/api_pb.js')
const yaml = require('js-yaml')

export default function UserProfile(props) {
    const classes = useStyles()
    let { username } = useParams()
    const [prof, setProfile] = useState(null)
    console.log(username)
    useEffect(() => {
        var req = new getuserRequest()
        req.setUserid(username)
        profiles.getuser(req, {}, function (err, response) {
            console.log(err)
            console.log(response.toObject())
            if (err == null) {
                setProfile(response.toObject())
            }
        })
    }, [])

    if (prof == null) {
        return <div>Loading...</div>
    }
    return (
        <>
            <Nav />
            <Grid container className={classes.root}>
                <Grid
                    container
                    component={Paper}
                    className={classes.profile}
                    elevation={4}
                >
                    <Grid item className={classes.card}>
                        <UserInfoCard profile={prof} />
                    </Grid>
                    <ProfileEditor profile={prof}/>
                </Grid>
                <Grid className={classes.footer} />
            </Grid>
        </>
    )
}

// CSS Theming
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100%',
        justifyContent: 'center',
        backgroundColor: 'rgb(50, 50, 50)',
        backgroundImage: 'url("/home-bg.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
    },
    profile: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '80vmin',
        minWidth: '60vmin',
        marginTop: 40,
        marginBottom: 60,
    },
    card: {
        margin: theme.spacing(2),
        width: '100%',
        justifyContent: 'center',
    },
    paper: {
        height: 200,
        width: 200,
    },
    footer: {
        height: 20,
    },
}))
