import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        left: 0
    }


})

const Home = () => {
    const classes = useStyles()
    return (
        <>
            <Navbar />
            <Header />
        </>
    )

}

export default Home