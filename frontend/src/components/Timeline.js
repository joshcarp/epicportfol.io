// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import Timeline from '@material-ui/lab/Timeline'
// import TimelineItem from '@material-ui/lab/TimelineItem'
// import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
// import TimelineConnector from '@material-ui/lab/TimelineConnector'
// import TimelineContent from '@material-ui/lab/TimelineContent'
// import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
// import TimelineDot from '@material-ui/lab/TimelineDot'
// import Paper from '@material-ui/core/Paper'
// import Typography from '@material-ui/core/Typography'
//
// const useStyles = makeStyles((theme) => ({
//     paper: {
//         padding: '6px 16px',
//     },
//     secondaryTail: {
//         backgroundColor: theme.palette.secondary.main,
//     },
// }))
//
// export default function CustomizedTimeline() {
//     const classes = useStyles()
//
//     return (
//         <Timeline align="alternate">
//             <TimelineItem>
//                 <TimelineOppositeContent>
//                     <Typography variant="body2" color="textSecondary">
//                         2020
//                     </Typography>
//                 </TimelineOppositeContent>
//                 <TimelineSeparator>
//                     <TimelineDot color="primary"></TimelineDot>
//                     <TimelineConnector />
//                 </TimelineSeparator>
//                 <TimelineContent>
//                     <Paper elevation={3} className={classes.paper}>
//                         <Typography variant="h6" component="h6">
//                             Senior Software Engineer
//                         </Typography>
//                         <Typography variant="h6" component="h1">
//                             Tesla
//                         </Typography>
//                         <Typography variant="body2">
//                             Did some stuff with Elon
//                         </Typography>
//                     </Paper>
//                 </TimelineContent>
//             </TimelineItem>
//             <TimelineItem>
//                 <TimelineOppositeContent>
//                     <Typography variant="body2" color="textSecondary">
//                         2018
//                     </Typography>
//                 </TimelineOppositeContent>
//                 <TimelineSeparator>
//                     <TimelineDot color="primary"></TimelineDot>
//                     <TimelineConnector />
//                 </TimelineSeparator>
//                 <TimelineContent>
//                     <Paper elevation={3} className={classes.paper}>
//                         <Typography variant="h6" component="h1">
//                             Software Engineer
//                         </Typography>
//                         <Typography>Did software stuff...</Typography>
//                     </Paper>
//                 </TimelineContent>
//             </TimelineItem>
//             <TimelineItem>
//                 <TimelineOppositeContent>
//                     <Typography variant="body2" color="textSecondary">
//                         2015
//                     </Typography>
//                 </TimelineOppositeContent>
//                 <TimelineSeparator>
//                     <TimelineDot color="primary"></TimelineDot>
//                     <TimelineConnector />
//                 </TimelineSeparator>
//                 <TimelineContent>
//                     <Paper elevation={3} className={classes.paper}>
//                         <Typography variant="h6" component="h1">
//                             Junior Software Developer
//                         </Typography>
//                         <Typography>Drank heaps of coffee</Typography>
//                     </Paper>
//                 </TimelineContent>
//             </TimelineItem>
//             <TimelineItem>
//                 <TimelineOppositeContent>
//                     <Typography variant="body2" color="textSecondary">
//                         2014
//                     </Typography>
//                 </TimelineOppositeContent>
//                 <TimelineSeparator>
//                     <TimelineDot color="primary"></TimelineDot>
//                 </TimelineSeparator>
//                 <TimelineContent>
//                     <Paper elevation={3} className={classes.paper}>
//                         <Typography variant="h6" component="h1">
//                             Software Engineer Intern
//                         </Typography>
//                         <Typography>Did nothing...</Typography>
//                     </Paper>
//                 </TimelineContent>
//             </TimelineItem>
//         </Timeline>
//     )
// }
