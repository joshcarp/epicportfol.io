import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}))

export default function CustomizedTimeline(props) {
    const classes = useStyles()
    const final = [];
    for (let user of props.profile.timeline) {
        final.push(
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        {user.dates}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary"></TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h6">
                            {user.title}
                        </Typography>
                        <Typography variant="h6" component="h1">
                            {user.company}
                        </Typography>
                        <Typography variant="body2">
                            {user.description}
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

        );
    }
    return (
        <Timeline align="alternate">
            {final}
        </Timeline>
    )
}
