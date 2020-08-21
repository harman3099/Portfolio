import React, {useState} from 'react';
import axios from 'axios';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Button, Grid, Box } from '@material-ui/core';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './navbar';
import Footer from './footer';


const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute"
  },
  button: {
    marginTop: "1rem",
    color: "#122254",
    border: "1px solid #122254",
    boxShadow: "10px 10px 20px 0px rgba(18,34,84,1)",
    backgroundColor: "#5e7cd6",
    "&:hover": {
      backgroundColor: "#122254",
      color: "#5e7cd6"
    }
  }
}))

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#122254",
    },
    "& label": {
      color: "#122254"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #122254",
        boxShadow: "10px 10px 20px 0px rgba(18,34,84,1)"
        
      },
      "&:hover fieldset": {
        border: "1px solid #122254",
        boxShadow: "10px 10px 20px 0px rgba(18,34,84,1)"
      },
      "& .Mui-focused fieldset": {
        border: "1px solid #122254",
        boxShadow: "10px 10px 20px 0px rgba(18,34,84,1)",
      }
    }
  }
})(TextField); 


const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [open, setOpen] = useState(false);

  const handleAlert = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newMessage = {
      name: state.name,
      email: state.email,
      company: state.company,
      message: state.message
    }
    axios.post("https://harmanportfolio.herokuapp.com/send", newMessage)
    .then(res => console.log(res.data))
    .catch(err => console.log(`Error: ${err}`))
    handleAlert();
    window.location= "/";
  }

  const classes = useStyles();
  return (
    <>
      <Navbar heading="Contact Me"/>
      <Box component="div">
        <Grid container justify="center">
          <Box component="form" onSubmit={handleSubmit} className={classes.form}>
            <InputField onChange={handleChange} required={true} fullWidth={true} label="Name" name="name" variant="outlined"
              inputProps={{style:{color: "#122254"}}} margin="dense" size="medium" />
            <InputField onChange={handleChange} fullWidth={true} required={true} label="Email" name="email" variant="outlined" 
              inputProps={{style:{color: "#122254"}}} margin="dense" size="medium" />
            <InputField onChange={handleChange} fullWidth={true} label="Company (optional)" name="company" variant="outlined" 
              inputProps={{style:{color: "#122254"}}} margin="dense" size="medium" />
            <InputField onChange={handleChange} required={true} multiline fullWidth={true} label="Message" name="message" variant="outlined" 
              inputProps={{style:{color: "#122254"}}} margin="dense" size="medium" />
            <br/>
            <Button className={classes.button} type="submit" variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>
              Send
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Your message has been sent!
              </Alert>
            </Snackbar>
          </Box>
        </Grid>
      </Box>
      <Footer position="fixed"/>
    </>
  )
}

export default Contact
