import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {BottomNavigation, BottomNavigationAction, Typography } from "@material-ui/core";
import Github from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0, 
      maxWidth: "auto"
    },
    "& .MuiSvgIcon-root": {
      fill: "#5e7cd6",
      transition: "font-size 0.2s",
      "&:hover": {
        fontSize: "2rem"
       
      }
    }
  },
  bottom: {
    width: '100%',
    bottom: 0,
    background: "#222"
  }
})


const Footer = (props) => {
  const classes = useStyles();
  return (
    <>
    <BottomNavigation className={classes.bottom} style={{position:`${props.position}`}}>
      <BottomNavigationAction className={classes.root} style={{padding: 0}} 
       icon={<Github/>} href={"https://github.com/harman3099"}/>
      <BottomNavigationAction className={classes.root} style={{padding: 0}} 
       icon={<LinkedIn/>} href={"https://www.linkedin.com/in/harmandeep-kaul-a3811ab1/"} />
      <Typography variant="caption" style={{color:"#5e7cd6", padding: "1rem"}}>
        Copyright © Harmandeep Kaul {new Date().getFullYear()}
      </Typography>
    </BottomNavigation>
    </>
  )
}

export default Footer;
