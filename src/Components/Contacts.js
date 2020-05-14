import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import sendIcon from "@material-ui/icons/Send";
import Navbar from './Navbar';

const useStyles= makeStyles(
    {
form: {
    top:"50%",
    left:"50%",
    transform:"translate(-50%, -50%)",
    position:"absolute"
},
 button:{
     marginTop:"1rem",
     color:"tomato",
     borderColor:"tomato"
 }
    }
)

const Contacts = () => {
    const classes = useStyles();
    return(
        <div>
            <Navbar/>
           <Box component="div" className={classes.form}>
               <Grid container justify="center">
                   <Box component="form">
<Typography variant="h5" style={{color:"tomato"}}> Contact me at +1 (647) 562-7929</Typography>
<br/>
<Button className={classes.button} variant="outlined" fullwidth={true} endIcon={<sendIcon/>} align="center">Contact me at LinkedIn</Button>
<br/>
<Button className={classes.button} variant="outlined" fullwidth={true} endIcon={<sendIcon/>} align="center">Contact me at Gmail</Button>
                   </Box>

               </Grid>
           </Box>

            </div>
    )
}
export default Contacts