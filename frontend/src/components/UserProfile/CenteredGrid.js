import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageAvatars from "./ImageAvatars";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import RedditIcon from '@material-ui/icons/Reddit';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ImageAvatars></ImageAvatars>

            <Grid container spacing={3}>



                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        Name
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Contact address</Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <a href="https://www.facebook.com/mrjoshcarp" target="_blank">
                            <FacebookIcon></FacebookIcon>
                        </a>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <a href="https://au.linkedin.com/" target="_blank">
                            <LinkedInIcon></LinkedInIcon>
                        </a>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <a href="https://www.reddit.com/" target="_blank">
                            <RedditIcon></RedditIcon>
                        </a>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <a href="https://www.instagram.com/?hl=en" target="_blank">
                            <InstagramIcon></InstagramIcon>
                        </a>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>Bio title</Paper>

                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>Bio body:josh is goddddddddddddddddddddddddd fdjsfgnasdkfhdsajkfhasdjkfhadskjfhasdfjkadshfkjashfjkasfhas
                        dsfdsafdasfasdfdasfdasfadsfasd
                    </Paper>
                </Grid>




            </Grid>
        </div>
    );
}
