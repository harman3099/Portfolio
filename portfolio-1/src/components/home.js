import React from "react";
import Navbar from './navbar';
import ParticleBar from './particle';
import {makeStyles} from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../DP.jpg";
import Footer from "./footer";


const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: theme.spacing(2)
  },
  title: {
    color: "#122254"
  },
  subtitle: {
    color: "#122254",
    marginBottom: "3rem",
    padding: "0 2rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    padding: "1rem 3rem",
    zIndex: 1
  }
}))

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar heading="Home"/>
      <ParticleBar/>
      
      <Box className={classes.typedContainer}>
        <Grid container justify="center">
          <Avatar className={classes.avatar} src={avatar} alt="Harmandeep Kaul" />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Harmandeep Kaul"]} typeSpeed={60} />
        </Typography>
        <br/>
        <Typography className={classes.subtitle} variant="h5">
          <Typed strings={["JavaScript", "ReactJS", "NodeJS", "MaterialUI", "MongoDB", "MERN Stack"]} 
            typeSpeed={40}
            backSpeed={30}
            loop />
        </Typography>
      </Box>
      <Footer position="fixed" />
    </>
  )
}

export default Home
