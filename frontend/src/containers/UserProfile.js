import React from 'react'
import Timeline from '../components/Timeline'
import {
    makeStyles,
    Grid,
    Paper,
} from '@material-ui/core'
import CenteredGrid from '../components/UserProfile/CenteredGrid'
import ImageBox from '../components/ImageBox'

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

export default function UserProfile(props) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>

            {/* PROFILE CONTAINER */}
            <Grid container component={Paper} className={classes.profile} elevation={4}>

                {/* PROFILE CARDS EXAMPLE */}
                <Grid item className={classes.card}>
                    <CenteredGrid />
                </Grid>

                <Grid item className={classes.card}>
                    <Timeline />
                </Grid>

                <Grid item className={classes.card}>
                    <ImageBox />
                </Grid>

            </Grid>
            <Grid className={classes.footer} />
        </Grid>
    )
}