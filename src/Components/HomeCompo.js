import React from 'react';
import {Typography, Avatar, Grid, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import avatar from './avatar.jpeg'
import Typed from "react-typed"
import Resume from './Resume'
import Particles from 'react-particles-js'

//CSS Styles
const useStyles = makeStyles(theme=>({
avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
},

title: {
  
    color: "tomato"
 
},

subtitle: {
    color: "tan",
    marginBottom: "3rem"
   
},
typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textALign: "center",
    zIndex: 1

}

}))

const HomeCompo = () => {
const classes = useStyles()
    return (
        <>
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar src={avatar} alt="Praneet Kaur" className={classes.avatar}/>
            </Grid>
            <Grid container justify="center">
            <Typography variant="h3" className={classes.title}>
                <Typed strings={["Praneet Kaur"]} typeSpeed={40}/>
            </Typography>
            </Grid>
            <br/>
            <Grid container justify="center">
            <Typography variant="h4" className={classes.subtitle}>
                <Typed strings={["Web Designer", "Web Developer", "Web Producer (AEM, WordPress, Sharepoint)", "Web Developer", "Digital Marketing"]} typeSpeed={40} backSpeed={40}/>
            </Typography>
            </Grid>
        </Box>
        <Particles
                canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: true,
                                value_area: 900

                            }
                        },
                        shape: {
                            type: "star",
                            stroke: {
                                width: 1,
                                color: "tomato"
                            }
                        },

                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 10,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0
                            }

                        }

                    }
                }}

            />
        </>
       
    )
}


export default HomeCompo