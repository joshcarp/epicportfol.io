import React from 'react';
import { makeStyles, Paper, Grid, Avatar, IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import RedditIcon from '@material-ui/icons/Reddit';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
    field: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    profileColumn: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: theme.spacing(1),
        width: 240,
        flexGrow: 1,
    },
    bioColumn: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: theme.spacing(1),
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
    for (let link of props.profile.links) {
        console.log(link)
        if (link.includes("reddit")){
            links.push(
                <Grid item className={classes.socialRowIcon}>
                    <IconButton href={link}>
                        <RedditIcon />
                    </IconButton>
                </Grid>
            )
        }
        if (link.includes("facebook")){
            links.push(
                <Grid item className={classes.socialRowIcon}>
                    <IconButton href={link}>
                        <FacebookIcon />
                    </IconButton>
                </Grid>
            )
        }
        if (link.includes("linkedin")){
            links.push(
                <Grid item className={classes.socialRowIcon}>
                    <IconButton href={link}>
                        <InstagramIcon />
                    </IconButton>
                </Grid>
            )
        }
        if (link.includes("instagram")){
            links.push(
                <Grid item className={classes.socialRowIcon}>
                    <IconButton href={link}>
                        <InstagramIcon />
                    </IconButton>
                </Grid>
            )
        }
    }
    return (
        <Grid container className={classes.root}>
            <Grid container className={classes.profileCard}>
                {/* PROFILE IMAGE + NAME */}
                <Grid container className={classes.profileColumn}>
                    <Grid item>
                        <Avatar alt={props.profile.full_name} src={props.profile.picture} className={classes.avatar} />
                    </Grid>
                    <Grid item>
                        <Paper className={classes.field}>
                            {props.profile.full_name}
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.field}>
                            {props.profile.email}
                        </Paper>
                    </Grid>
                    {/* SOCIAL ICONS */}
                    <Grid container className={classes.socialRow}>
                        {links}
                    </Grid>
                </Grid>
                {/* BIO TITLE + BODY */}
                <Grid container className={classes.bioColumn}>
                    <Grid item>
                        <Paper className={classes.field}>About Me</Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.field}>
                            {props.profile.bio}
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    );
}
