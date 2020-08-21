import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography
} from '@material-ui/core';
import Navbar from './navbar';
import Footer from './footer'
import AutoWorld from '../images/Auto-World.png';
import Quotes from '../images/Quotes1.png';
import Portfolio from '../images/Portfolio.png'

const useStyles = makeStyles({
  mainContainer: {
    background: "none",
    height: "100%"
    
  },
  cardContainer: {
    background: "#5e7cd6",
    border: "2px solid #122254",
    boxShadow: "10px 10px 20px 0px rgba(18,34,84,1)",
    maxWidth: 345,
    margin: "4rem auto"
  },
  cardImage: {
    padding: "0.5rem",
    transition: "0.2s",
    "&:hover": {
      padding: "0.2rem"
    }
  }
})


const Projects = () => {
  const classes = useStyles();

  return (
    <>
    <Box component="div" className={classes.mainContainer}>
      <Navbar heading="Projects"/>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia 
                className={classes.cardImage}
                component="img"
                alt="AutoWorld"
                height="250"
                image={AutoWorld}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" style={{color: "#122254", textAlign: "center"}}>
                  NodeJS|EJS
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{color: "#122254"}}>
                  This website was built using NodeJS, Bootstrap, Express, Passport, Heroku, and MongoDB Atlas.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" style={{color: "#C3CCEA", background: "#122254"}} href={"https://github.com/harman3099/AutoWorld"}>
                  {"< / >"}
                </Button>
                <Button size="large" style={{color: "#C3CCEA", background: "#122254"}} href={"https://fascinatingautoworld.herokuapp.com/"}>
                   Demo
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia 
                className={classes.cardImage}
                component="img"
                alt="Quotes"
                height="250"
                image={Quotes}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" style={{color: "#122254", textAlign: "center"}}>
                  MERN APP
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{color: "#122254"}}>
                  This is a small MERN app built using ReactJS, NodeJS, Express, Heroku and MongoDB Atlas. 
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" style={{color: "#C3CCEA", background: "#122254"}} href={"https://github.com/harman3099/QuoteApp"}>
                  {"< / >"}
                </Button>
                <Button size="large" style={{color: "#C3CCEA", background: "#122254"}} href={"https://quotemotivationalapp.herokuapp.com/"}>
                   Demo
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia 
                className={classes.cardImage}
                component="img"
                alt="Portfolio"
                height="250"
                image={Portfolio}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" style={{color: "#122254", textAlign: "center"}}>
                  ReactJS|MUI
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{color: "#122254"}}>
                  This portfolio site was built using ReactJS, MaterialUI and NodeJS.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" style={{color: "#C3CCEA", background: "#122254"}} href={"https://github.com/harman3099/Portfolio"}>
                  {"< / >"}
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
    <Footer position="relative"/>
    </>
  )
}

export default Projects;

