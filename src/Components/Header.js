import React from 'react';
import {Typography, Avatar, Grid, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import avatar from './avatar.jpeg'
import Typed from "react-typed"

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

const Header = () => {
const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar src={avatar} alt="Praneet Kaur" className={classes.avatar}/>
            </Grid>
            <Grid container justify="center">
            <Typography variant="h4" className={classes.title}>
                <Typed strings={["Praneet Kaur"]} typeSpeed={40}/>
            </Typography>
            </Grid>
            <br/>
            <Grid container justify="center">
            <Typography variant="h5" className={classes.subtitle}>
                <Typed strings={["Web Designer", "Web Developer", "Content Manager"]} typeSpeed={40} backSpeed={40}/>
            </Typography>
            </Grid>
           
        </Box>
    )
}

export default Header