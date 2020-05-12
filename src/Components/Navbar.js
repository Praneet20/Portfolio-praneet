import React, {useState} from 'react';
import {AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon} from "@material-ui/core";
import {ArrowBack, AssignmentInd, Home, Apps, ContactMail} from '@material-ui/icons';
import avatar from './avatar.jpeg';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';

//CSS Styles
const useStyles= makeStyles(theme=>({

    menuSliderContainer: {
        width: "250",
        background: "#511",
         height:"100%"

    },

    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(15),
        height: theme.spacing(15),
        
    },

    listItem: {
    color: "tan"
    }

}

)


)

const menuItems = [
    {
        listIcons: <Home/>,
        listText:"Home",
        listPath: "/"
    },

    {
        listIcons: <AssignmentInd/>,
        listText:"Resume",
        listPath: "/resume"
    },

    {
        listIcons: <Apps/>,
        listText:"Portfolio"
    },
    {
        listIcons: <ContactMail/>,
        listText:"Contacts"
    }
]

const Navbar = () => {
    const classes= useStyles();
    const [state, setState]=useState({
        right: false
    });

    const toggleSlider = ((slider, open) => () => {
    setState({...state, [slider]: open});
});

    const sideList = slider => {
        
        return (
            <>
        <Box className={classes.menuSliderContainer} 
        component="div"
        onClick={toggleSlider(slider,false)}>
        <Avatar  className={classes.avatar} src={avatar} alt="Praneet Kaur"></Avatar>
        <Divider/>
        <List>
            {
                menuItems.map((lsItem, key)=>(
<ListItem button key={key} component={Link}  to={lsItem.listPath}>
                <ListItemIcon className={classes.listItem}>
                    {lsItem.listIcons}
                </ListItemIcon>
                <ListItemText className={classes.listItem} primary={lsItem.listText}/>
            </ListItem>
           
                ))
            }
            
        </List>
    </Box></>
    )}

    return (
        <>
         
        <Box component="nav">
           <AppBar position="static" style={{background: "#222"}}>
               <Toolbar>
                   <IconButton onClick={toggleSlider("right", true)}>
                   <ArrowBack style={{color:"tomato"}}></ArrowBack>
                   </IconButton>

                   <Typography variant="h5" style={{color: "tan"}}>
                       Portfolio
                   </Typography>
                   <MobilRightMenuSlider  open={state.right} anchor="right" onClose={toggleSlider("right", false)}>
                   {sideList("right")}

                   </MobilRightMenuSlider>
               </Toolbar>
           </AppBar>
        </Box>
        </>
    )
    
    }
    
    export default Navbar