import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon
} from '@material-ui/core';
import { ArrowForward, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons'
import avatar from "../DP.jpg"

const useStyles = makeStyles( theme => ({
  menuSliderContainer: {
    width: 250,
    background: "#5e7cd6",
    height: "100%"
  },
  avatar: {
    display: "block",
    margin: "1.5rem auto",
    width: theme.spacing(12),
    height: theme.spacing(12)
  },
  listItem: {
    margin: "2rem, auto"
  }

}))

const menuItems = [
  {
    listIcon: <Home/>,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd/>,
    listText: "About me",
    listPath: "/resume"
  },
  {
    listIcon: <Apps/>,
    listText: "Projects",
    listPath: '/projects'
  },
  {
    listIcon: <ContactMail/>,
    listText: "Contact Me",
    listPath: '/contact'
  }
]


const Navbar = (props) => {
  const [state, setState] = useState({
    right: false
  });

  const toggleSlider = (slider, open) => () => {
    setState({...state, [slider]: open})
  };
  const classes = useStyles();

  const sideList = slider => (
    <Box className={classes.menuSliderContainer} component="div"
      onClick={toggleSlider(slider, false)}>
      <Avatar className={classes.avatar} src={avatar} alt="Harmandeep Kaul"/>
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.listItem} primary={lsItem.listText} />
          </ListItem>
        ))}
        
      </List>  
    </Box>
  )

  return (
    <>
    
    <Box component="nav">
      <AppBar position="fixed" style={{background: "#222"}}>
        <Toolbar>
          <IconButton onClick={toggleSlider("right", true)}>
            <ArrowForward style={{color: "#5e7cd6"}}/>
          </IconButton>
           <Typography variant="h5" style={{color: "#5e7cd6"}}>
            {props.heading}
            </Typography>
          <MobilRightMenuSlider anchor="left"
           open={state.right} 
           onClose={toggleSlider("right", false)}>
            {sideList("right")}
          </MobilRightMenuSlider>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar;