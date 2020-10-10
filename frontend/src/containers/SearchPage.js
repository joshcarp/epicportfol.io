import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import '../App.css'
import { Link, useLocation, BrowserRouter as Router } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Logo from '../assets/logo.svg'
import queryString from 'query-string'
const { searchClient } = require('./../proto/api_grpc_web_pb.js')
const searcher = new searchClient('https://search.epicportfol.io')
const { searchRequest } = require('./../proto/api_pb.js')

function useQuery() {
    return new URLSearchParams(useLocation().search)
}
export default function SearchPage() {
    const classes = useStyles()
    let query = useQuery()
    var term = query.get('term')
    var r = new searchRequest()
    const [prof, setProfile] = useState(null)
    r.setTerm(term)
    useEffect(() => {
        searcher.search(r, {}, function (err, response) {
            setProfile(response.toObject())
        })
    }, [])
    if (prof == null) {
        return <div>Loading...</div>
    }
    {
        /*<Grid container wrap="nowrap" spacing={2}>
        <Grid item>
            <Avatar
                alt={user.fullName}
                src={user.picture}
                className={classes.avatar}
            />
        </Grid>
        <Grid item xs zeroMinWidth>
            <Link to={'/u/' + user.username}>{user.username}</Link>
            <Typography noWrap>{user.fullName}</Typography>

            <Typography noWrap>{user.bio}</Typography>
        </Grid>
    </Grid>*/
    }
    return (
        <div className="Homepage">
            <div className={classes.root}>
                <Paper elevation={3} className={classes.paper}>
                    {prof.resultsList.map((user) => (
                        <List className={classes.root}>
                            <Divider variant="inset" component="li" />
                            <ListItem
                                alignItems="flex-start"
                                button
                                component={Link}
                                to={'/u/' + user.username}
                            >
                                {/*<Link to={'/u/' + user.username}>
                                    {user.username}
                                </Link>
                    <Typography noWrap>{user.fullName}</Typography>*/}
                                <ListItemAvatar>
                                    <Avatar
                                        alt={user.fullName}
                                        src={user.picture}
                                        className={classes.avatar}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={user.fullName}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            ></Typography>
                                            {
                                                <Typography noWrap>
                                                    {user.bio}
                                                </Typography>
                                            }
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>
                    ))}
                </Paper>
            </div>
        </div>
    )
}
// CSS Theming
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}))
