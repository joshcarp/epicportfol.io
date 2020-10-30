import React, { useEffect, useState } from 'react'
import {Route, useParams} from 'react-router-dom'
import Timeline from '../components/Timeline'

import { makeStyles, Grid, Paper } from '@material-ui/core'
import UserInfoCard from '../components/UserInfoCard'
import ImageBox from '../components/ImageBox'
import ProfileEditor from '../components/Editor'
import PopModal from '../components/PopModal'
import Nav from '../containers/Nav'
import {Redirect} from "react-router";

const { profilesClient, authenticateClient, verifyRequest } = require('./../proto/api_grpc_web_pb.js')
const profiles = new profilesClient('https://profilesv2-ogaheemccq-uc.a.run.app')
const authenticate = new authenticateClient('http://localhost:444')
const { getuserRequest, profile } = require('./../proto/api_pb.js')
const yaml = require('js-yaml')

export default function UserProfile(props) {
    const classes = useStyles()
    let { username } = useParams()
    const [comp, setComp] = useState(null)
    const [prof, setProfile] = useState(null)
    const [authed, setAuthed] = useState(false)
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
    useEffect(()=>{
        var req = new verifyRequest()
        req.setUsername(window.location.pathname.replace("/u/", ""))
        const meta = {authorization: 'Bearer ' + localStorage.getItem('token')}
        authenticate.verify(req, meta, function (err, response) {
            setAuthed(response.getVerified())
        })
        }, [])


    if (prof == null) {
        return <div>Loading...</div>
    }

    let search = window.location.search;
    let params = new URLSearchParams(search);
    console.log(prof.content)
    return (
        <>
            <Nav />
            <Grid container className={classes.root}>
                <Grid container
                    component={Paper}
                    className={classes.profile}
                    elevation={4}>
                    <Grid item className={classes.card}>
                        {
                            authed && (params.get('edit') !== 'true') &&
                            <button onClick={() => params.set('edit', 'true')}>Edit</button>
                        }
                        {
                            authed && (params.get('edit') === 'true') &&
                            <button onClick={() => params.set('edit', 'false')}>Save</button>
                        }
                        <UserInfoCard profile={prof} />
                    </Grid>
                    <Grid container className={classes.card}>
                    <div container className={classes.card}>
                    {
                        (params.get('edit'))
                        ? <ProfileEditor profile={prof}/>
                        : <div dangerouslySetInnerHTML={{ __html: prof.content }} />
                    }
                    </div>
                    </Grid>
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
