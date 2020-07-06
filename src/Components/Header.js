import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import avatar from './avatar.jpeg'
import Typed from "react-typed"
import Resume from './Resume'
import Particles from 'react-particles-js'
import HomeCompo from './HomeCompo';
import Portfolio from './portfolio';
import Contacts from './Contacts';

//CSS Styles
const useStyles = makeStyles(theme => ({
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
        <>
        <div>
            <HomeCompo />
        </div>
        <div>
            <Resume />
        </div>
        <div>
            <Portfolio />
        </div>
        <div>
            <Contacts />
        </div>
        </>
    )
}


export default Header