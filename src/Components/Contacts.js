import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles(
    {
        form: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "absolute",

        },
        button: {
            marginTop: "1rem",
            color: "tomato",
            borderColor: "tomato",
            textDecoration: "none"
        }
    }
)

const Contacts = () => {
    const classes = useStyles();
    return (
        <div>
            <Box component="div" >
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ height: "100vh"}}
                >
                    <Box>
                        <Typography variant="h5" style={{ color: "tomato" }}>For more Projects please visit the below link:</Typography>

                        <a href="https://github.com/Praneet20" target="_blank" style={{ textDecoration: "none" }}><Button className={classes.button} variant="outlined" fullwidth={true} endIcon={<SendIcon />} align="center">Visit Github</Button></a>

                        <br /><br />
                        <Typography variant="h5" style={{ color: "tomato" }}> Contact me at +1 (647) 562-7929</Typography>
                        <br />
                        <a href="https://www.linkedin.com/in/praneet-kaur-b6043b126/" target="_blank" style={{ textDecoration: "none" }}><Button className={classes.button} variant="outlined" fullwidth={true} endIcon={<SendIcon />} align="center">Contact me at LinkedIn</Button></a>
                        <br />
                        <a href="mailto:prntkr13@gmail.com" target="_blank" style={{ textDecoration: "none" }}><Button className={classes.button} variant="outlined" fullwidth={true} endIcon={<SendIcon />} align="center">Contact me at Gmail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button></a>
                    </Box>

                </Grid>
            </Box>

        </div>
    )
}
export default Contacts