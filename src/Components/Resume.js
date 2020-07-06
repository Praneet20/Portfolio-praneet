import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core'
import Navbar from './Navbar';

const useStyles = makeStyles(theme => ({

    mainContainer: {
        backGround: "tomato"
    },

    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: '""',
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: "0"

        },
        "&:after": {
            content: '""',
            display: "table",
            clear: "both"

        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }

    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50%-5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                boredColor: "transparent transparent tomato tomato"
            }

        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: "1",
        padding: "0.5rem 0  1rem",
        "&:before": {
            display: "none"

        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto",
                "&:nth-of-type(2n)": {
                    float: "none",
                    margin: "0 auto"
                },
                "&:nth-of-type(2n):before": {
                    diplay: "none"
                }

            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "tomato",
        padding: "0",
        textTransform: "uppercase"
    }

}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>Working Experience</Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`} >2015-19</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" style={{ color: "tomato" }}>Web Designer/Web Producer/ Web Developer</Typography>
                        <br />
                        <Typography variant="h4" align="center" className={classes.subHeading} style={{ color: "tomato" }}>Ernst and Young</Typography>

                        <Typography variant="subtitle1" align="center" style={{ color: "white" }}>I have worked as Web Designer/Web Producer (AEM, WordPress, Sharepoint)/Web Developer at Ernst and Young for 4+ years using technologies React, Javascript(ES6), NPM, HTML5, CSS3, SASS, LESS, Bootstrap, JQuery, Material-UI, MySQL Databases, CSS Grid frameworks. I have also worked with Docker, Redux, JIRA , WordPress, Adobe (Photoshop, Dreamweaver, Acrobat Pro), MS Office-2013, (Excel, Word,  PowerPoint), Sharepoint, CI/CD, Jenkins, CircleCI, JIRA, GIT, Digital Marketing (SEO Best practices(metadata, google AdWords), Google Analytics, Adobe Analytics.)</Typography>
                    </Box>
                </Box>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`} >2020</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" style={{ color: "tomato" }}>IT Accountant Officer</Typography>

                        <Typography variant="h4" align="center" className={classes.subHeading} style={{ color: "tomato" }}>CIBC</Typography>

                        <Typography variant="subtitle1" align="center" style={{ color: "white" }}>I have worked as Admin(Clerical jobs, managing verification of Documents etc.) at CIBC.</Typography>
                    </Box>
                </Box>
            </Box>

        </>
    )

}

export default Resume
