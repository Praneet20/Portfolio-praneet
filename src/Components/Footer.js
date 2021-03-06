import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
root:{
"& .MuiBottomNavigationAction-root":{
    minWidth:0,
    maxWidth:250,

},
"& .MuiSvgIcon-root":{
    fill:"tan",
    "&:hover":{
        fill:"tomato",
        fontSize:"1.8rem"
    }
}
}
})



const Footer = () =>
{
    const classes = useStyles();
    return(  
<BottomNavigation width="auto" style={{background:"#222"}}>
<BottomNavigationAction
style={{padding:0}}
className={classes.root}
icon={<Facebook/>}
></BottomNavigationAction>
<BottomNavigationAction
style={{padding:0}}
className={classes.root}
icon={<Twitter/>}
></BottomNavigationAction>
<BottomNavigationAction
style={{padding:0}}
className={classes.root}
icon={<Instagram/>}
></BottomNavigationAction>

</BottomNavigation>



    )
}

export default Footer