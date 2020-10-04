import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Timeline from '../components/Timeline'
import {
    makeStyles,
    Grid,
    Paper,
} from '@material-ui/core'
import UserInfoCard from '../components/UserInfoCard'
import ImageBox from '../components/ImageBox'
import Iframebox from '../components/Iframebox'

const { profilesClient } = require('./../proto/api_grpc_web_pb.js');
const profiles = new profilesClient('https://profiles.epicportfol.io');
const { getuserRequest, profile } = require('./../proto/api_pb.js');
const yaml = require('js-yaml');

export default function UserProfile(props) {
    const classes = useStyles();
    let { username } = useParams();
    const [prof, setProfile] = useState(null);
    console.log(username);

    useEffect(() => {
        var req = new getuserRequest();
        req.setUserid(username);
        profiles.getuser(req, {}, function (err, response) {
            console.log(err)
            console.log(response.toObject())
            setProfile(response.toObject())
        })
    }, [])

    if (prof == null) {
        return <div>Loading...</div>;
    }
    /* Example of how to upload a profile */
    // profiles.updateuser(Object.assign(new profile, prof), {}, function (err, response) {
    //     console.log(err)
    //     console.log(response.toObject())
    //     setProfile(response.toObject())
    // })
    return (
        <Grid container className={classes.root}>

            {/* PROFILE CONTAINER */}
            <Grid container component={Paper} className={classes.profile} elevation={4}>

                {/* PROFILE CARDS EXAMPLE */}
                <Grid item className={classes.card}>
                    <UserInfoCard profile={prof} />
                </Grid>
                <Grid item className={classes.card}>
                    <Timeline profile={prof} />
                </Grid>
                <Grid item className={classes.card}>
                    <ImageBox profile={prof} />
                </Grid>

            </Grid>
            <Grid className={classes.footer} />
        </Grid>
    )
}

// CSS Theming
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100%",
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
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 10,
        maxWidth: "80vmin",
        minWidth: "60vmin",
        marginTop: 40,
        marginBottom: 60,
    },
    card: {
        margin: theme.spacing(1),
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
}));

