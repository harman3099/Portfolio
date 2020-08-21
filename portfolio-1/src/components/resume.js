import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Navbar from './navbar';
import Footer from './footer'


const useStyles = makeStyles(theme =>({

  timeLineItem: {
    padding: "1rem",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      color: "##122254",
      position: "absolute"
    },
    "&:before": {
      content: "''",
      color: "##122254",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "white white transparent transparent",
      boxShadow: "10px 10px 20px 0px rgba(18,34,84,1)",
      borderWidth: "0.625rem",
      transform: "rotate(-45deg)"
    }
  },

  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    background: "#5e7cd6",
    color: "##122254",
    border: "1px solid #122254",
    borderRadius: "5px",
    boxShadow: "10px 10px 20px 0px rgba(18,34,84,1)",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    }
  },

  mainContainer: {
    margin: "2rem 0.5rem"
  },

  textContainer: {
    color: "#122254",
    background: "#5e7cd6",
    border: "1px solid #122254",
    boxShadow: "10px 10px 20px 0px rgba(18,34,84,1)",
    borderRadius: "5px",
    width: "80%",
    margin: "1rem auto",
    padding: "2rem",
  },

  heading: {
    color: "#122254",
    padding: "3rem 0",
    textTransform: "uppercase",
  },

  subHeading: {
    color: "##122254",
    padding: "0",
    textTransform: "uppercase"
  }
}))


const Resume = () => {
  const classes = useStyles();
  return (
    <>

      <Navbar heading="About Me"/>
      <Box component="header" className={classes.mainContainer}>
        <Box component="div" align="center" >
          <Typography variant="subtitle1" className={classes.textContainer}>
            I am a Web Developer from Toronto, Ontario. I'm currently working as a freelance developer,
            helping local businesses create their web presence. I studied Pharmaceutical sciences and Biotechnology, but I always had an 
            interest in programming. I started working as a Junior Web-Developer in 2018 and have been in love with programming ever since.
            I like watching sci-fi and horror movies, talking about universe and it's mysteries, and about life in general. I like to have a conversation about
            science, whether it's computer science, chemistry, biology, or physics.
            <br/>
            If you are in need of a website or a web app, please contact me by sending a message through Contact page.
          </Typography>
          <Typography variant="h4"  align="center" className={classes.heading}>
            Key Skills
          </Typography>
          <Typography variant="subtitle1" align="center" className={classes.textContainer}>
            <p>- Working experience with HTML5, CSS3, JS, jQuery and NodeJS.</p>
            <p>- Big O notation, Data structures, Dijkstra’s shortest path Algorithm, Algorithms Sorting, Recursive functions.</p>
            <p>- Working knowledge of NodeJS, NPM and various packages including express, and authentication middlewares like Passport.</p>
            <p>- Working knowledge of Mongoose and MongoDB database.</p>
            <p>- Working knowledge of MERN stack.</p>
            <p>- Familiarity with React JS, React Router, React Hooks and MaterialUI.</p>
          </Typography>
        </Box>
        
        <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        </Typography>
        <Box component="div" >
          <Typography variant="h5" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2020
          </Typography>
          <Box component="div" className={`${classes.timeLineItem} ${classes.textContainer}`}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              Web Designing
            </Typography>
            <Typography variant="body1" align="center" >
              Freelance Web Developer
            </Typography>
            <Typography variant="subtitle1" align="center" >
              Currently working as a Freelance web developer. Working part-time with Trigbit Technologies on some projects. Also collaborated with a Graphic
              Designer to create websites for various clients including e-commerce, portfolio and small businesses.
            </Typography>
          </Box>
          <Typography variant="h5" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            11/2019
          </Typography>
          <Box component="div" className={`${classes.timeLineItem} ${classes.textContainer}`}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              Junior Web Developer
            </Typography>
            <Typography variant="body1" align="center" >
              Trigbit Technologies 
            </Typography>
            <Typography variant="subtitle1" align="center" >
              Worked as a Front end Junior Web Developer. Responsibilities included developing 
              websites using HTML5, CSS3, JS, jQuery, and some NodeJS. Writing readable and efficient 
              code. Debugging errors using chrome debugger and VS Code. Finalising files and pushing 
              them onto GitHub using GitBash and other terminals. Effectively work in a Team environment
              while keeping the department goals and constructive feedback from the colleagues in mind.
            </Typography>
          </Box>
          <Typography variant="h5" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            10/2018
          </Typography> 
        </Box>

        <Typography variant="h4" align="center" className={classes.heading}>
          Education
        </Typography>
        <Box component="div" >
          <Typography variant="h5" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2020
          </Typography>
          <Box component="div" className={`${classes.timeLineItem} ${classes.textContainer}`}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              Udemy Online Courses.
            </Typography>
            <Typography variant="subtitle1" align="center" >
            <p>- The Complete Javascript Course.</p>
            <p>- Javascript Algorithms and Data Structures.</p>
            <p>- The Modern React Bootcamp.</p>
            <p>- React – The Complete Guide.</p> 
            </Typography>
          </Box>
          <Typography variant="h5" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            11/2019
          </Typography>
          <br/>
          <Typography variant="h5" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2015
          </Typography>
          <Box component="div" className={`${classes.timeLineItem} ${classes.textContainer}`}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              Centennial College
            </Typography>
            <Typography variant="subtitle1" align="center" >
              Advance Diploma in Biotechnology.
            </Typography>
          </Box>
          <Typography variant="h5" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2013
          </Typography> 
          <Box component="div" className={`${classes.timeLineItem} ${classes.textContainer}`}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              London Metropolitan University
            </Typography>
            <Typography variant="subtitle1" align="center" >
              Bachelors of Pharmaceutical Science. First class Honors degree.
            </Typography>
          </Box>
          <Typography variant="h5" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2010
          </Typography> 
        </Box>
      </Box>
      <Footer position="relative"/>
    </>
  )
}

export default Resume;