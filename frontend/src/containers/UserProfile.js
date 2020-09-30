import React, {useEffect, useState} from 'react'
import   {useParams} from "react-router-dom";
import Timeline from '../components/Timeline'
import {
    makeStyles,
    Grid,
    Paper,
} from '@material-ui/core'
import UserInfoCard from '../components/UserInfoCard'
import ImageBox from '../components/ImageBox'
const { profilesClient } = require('./../proto/api_grpc_web_pb.js');
const profiles = new profilesClient('http://localhost:443');
const { getuserRequest } = require('./../proto/api_pb.js');
const yaml = require('js-yaml');

export default function UserProfile(props) {
    const classes = useStyles();
    let { username } = useParams();
    const [profile, setProfile] = useState(null);
    console.log(username);

    useEffect(() => {
        var req = new getuserRequest();
        req.setUserid(username);
        profiles.getuser(req, {}, function (err, response) {
            console.log(err)
            setProfile(response.toObject())
        })
//         setProfile(yaml.safeLoad(`full_name: Joshua Carpeggiani
// email: josh@joshcarp.com
// picture: https://avatars2.githubusercontent.com/u/32605850?s=460&v=4
// bio: In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used before final copy is available, but it may also be used to temporarily replace copy in a process called greeking, which allows designers to consider form without the meaning of the text influencing the design.Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a first-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors including Pages and Microsoft Word have since adopted Lorem ipsum as well.
//
// jobsList:
//     - title: Software engineer
//       dates: 2019-2020
//       company: akfhdkasdaskj
//       description: Beep boop whatevs
//     - title: Memester
//       dates: 2009-2010
//       company: akfhdkasdaskj
//       description: Beep boop whatevs
//     - title: Memester
//       dates: 2008-2009
//       company: akfhdkasdaskj
//       description: Beep boop whatevs
// linksList:
//       - https://reddit.com
//       - https://facebook.com
//       - https://linkedin.com
//       - https://instagram.com
// artifactsList:
//     - src: https://picsum.photos/id/3/1200/800
//     - src: https://picsum.photos/id/3/1200/800
//     - src: https://picsum.photos/id/3/1200/800
//     - src: https://picsum.photos/id/3/1200/800
//     `));
    }, [])
    if (profile == null) {
        return <div>Loading...</div>;
    }
    return (
        <Grid container className={classes.root}>

            {/* PROFILE CONTAINER */}
            <Grid container component={Paper} className={classes.profile} elevation={4}>

                {/* PROFILE CARDS EXAMPLE */}
                <Grid item className={classes.card}>
                    <UserInfoCard profile={profile} />
                </Grid>
                <Grid item className={classes.card}>
                    <Timeline profile={profile} />
                </Grid>
                <Grid item className={classes.card}>
                    <ImageBox profile={profile}/>
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
