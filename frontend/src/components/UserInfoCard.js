import React, { useEffect, useState } from 'react'
import { makeStyles, Grid, Avatar, IconButton, Typography, Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';

const { authenticateClient, verifyRequest } = require('./../proto/api_grpc_web_pb.js')
const authenticate = new authenticateClient('https://authenticate.epicportfol.io')


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        width: '10em',
        height: '10em',
        maxWidth: '50vmin',
        maxHeight: '50vmin',
        margin: theme.spacing(1),
    },
    field: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    profileColumn: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: theme.spacing(0),
        width: 200,
        flexGrow: 1,
    },
    bioColumn: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: theme.spacing(2),
        width: 240,
        flexGrow: 2,
    },
    socialRow: {
        display: 'flex',
        justifyContent: 'center',
    },
    socialRowIcon: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    profileCard: {
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(1),
    },
}));

export default function UserInfoCard(props) {
    const classes = useStyles();
    const links = [];
    const [authed, setAuthed] = useState(false)
    const [editState, setEditState] = useState(false)
    let username = props.profile.username
    console.log("USER: %o", username)

    // Check authorisation
    useEffect(() => {
        var req = new verifyRequest()
        req.setUsername(username)
        const meta = { authorization: 'Bearer ' + localStorage.getItem('token') }
        authenticate.verify(req, meta, function (err, response) {
            // setAuthed(response.getVerified())
            setAuthed(true)
        })
        console.log("AUTH META: %o", meta)

    }, [username])

    // Get Social Icons
    for (let link of props.profile.linksList) {
        console.log(link)
        if (link.includes("reddit")) {
            links.push(
                <Grid item className={classes.socialRowIcon}>
                    <IconButton href={link}>
                        <RedditIcon />
                    </IconButton>
                </Grid>
            )
        }
        else if (link.includes("facebook")) {
            links.push(
                <Grid item className={classes.socialRowIcon}>
                    <IconButton href={link}>
                        <FacebookIcon />
                    </IconButton>
                </Grid>
            )
        }
        else if (link.includes("linkedin")) {
            links.push(
                <Grid item className={classes.socialRowIcon}>
                    <IconButton href={link}>
                        <LinkedInIcon />
                    </IconButton>
                </Grid>
            )
        }
        else if (link.includes("instagram")) {
            links.push(
                <Grid item className={classes.socialRowIcon}>
                    <IconButton href={link}>
                        <InstagramIcon />
                    </IconButton>
                </Grid>
            )
        }
        else if (link.includes("twitter")) {
            links.push(
                <Grid item className={classes.socialRowIcon}>
                    <IconButton href={link}>
                        <TwitterIcon />
                    </IconButton>
                </Grid>
            )
        }
        else {
            links.push(
                <Grid item className={classes.socialRowIcon}>
                    <IconButton href={link}>
                        <LanguageIcon />
                    </IconButton>
                </Grid>
            )
        }
    }

    // Allow ?edit=true to trigger edit state
    useEffect(() => {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        if (params.get('edit') === 'true') {
            setEditState(true)
        }
    }, [])

    const toggleEdit = () => {
        if (editState) {
            setEditState(false)
        }
        else {
            setEditState(true)
        }
    }

    const renderEditButton = (
        <>
            {
                authed && !editState &&
                <Button
                    variant='outlined'
                    color='primary'
                    style={{ float: "right" }}
                    onClick={toggleEdit}
                >
                    Edit Info
                </Button>
            }
            {
                authed && editState &&
                <Button
                    variant='outlined'
                    color='secondary'
                    style={{ float: "right" }}
                    onClick={toggleEdit}
                >
                    Save Info
                </Button>
            }
        </>
    )


    return (
        <>
            {renderEditButton}
            <Grid container className={classes.root}>
                {/* PROFILE IMAGE + NAME */}
                <Grid container className={classes.profileColumn}>
                    <Grid item>
                        <Avatar alt={props.profile.fullName} src={props.profile.picture} className={classes.avatar} />
                    </Grid>
                    <Grid item className={classes.field}>
                        <Typography variant='h5' color='textPrimary'>
                            <strong>
                                {props.profile.fullName}
                            </strong>
                        </Typography>
                    </Grid>
                    <Grid item className={classes.field}>
                        {props.profile.email}
                    </Grid>
                    {/* SOCIAL ICONS */}
                    <Grid container className={classes.socialRow}>
                        {links}
                    </Grid>
                </Grid>
                {/* BIO TITLE + BODY */}
                <Grid container className={classes.bioColumn}>
                    <Grid item className={classes.field}>
                        <Typography variant='h6' color='textPrimary'>
                            <strong>
                                {props.profile.bioTitle || "About Me"}
                            </strong>
                        </Typography>
                    </Grid>
                    <Grid item className={classes.field}>
                        {props.profile.bio || (
                            <i>
                                This space is currently empty.
                            </i>
                        )}
                    </Grid>
                </Grid>


            </Grid>
        </>
    );
}
