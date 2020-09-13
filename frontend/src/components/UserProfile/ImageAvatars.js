import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import josh from "./josh.png"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
}));

export default function ImageAvatars() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} />*/}
            {/*<Avatar alt="Remy Sharp" src='/josh.png' />*/}
            <Avatar alt="Remy Sharp" src="josh.png" className={classes.large} />
        </div>
    );
}
