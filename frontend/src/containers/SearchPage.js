import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import '../App.css'
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";

import Logo from '../assets/logo.svg'
import queryString from 'query-string';
const { searchClient } = require('./../proto/api_grpc_web_pb.js');
const searcher = new searchClient('https://search.epicportfol.io');
const { searchRequest } = require('./../proto/api_pb.js');


function useQuery() {
    return new URLSearchParams(useLocation().search);
}
export default function SearchPage() {
    const classes = useStyles();
    let query = useQuery();
    var term = query.get("term")
    var r = new searchRequest();
    const [prof, setProfile] = useState(null);
    r.setTerm(term);
    useEffect(() => {
    searcher.search(r, {}, function (err, response) {
        setProfile(response.toObject())
    })
    }, [])
    if (prof == null) {
        return <div>Loading...</div>;
    }
    return (
        <div className="Homepage">
        <div className={classes.root}>
            <Paper className={classes.paper}>
                {prof.resultsList.map(user =>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar alt={user.fullName} src={user.picture} className={classes.avatar}/>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Link to={"/u/" + user.username}>
                                <Typography noWrap>{user.fullName}</Typography>
                            </Link>
                            <Typography noWrap>{user.bio}</Typography>
                        </Grid>
                    </Grid>
                )}
            </Paper>
        </div>
        </div>
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
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: "80vmin",
        minWidth: "60vmin",
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
        width: 500,
    },
    footer: {
        height: 20,
    },
}));
