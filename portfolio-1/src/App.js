import React from 'react';
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components/home';
import Resume from './components/resume';
import Projects from './components/projects'
import Contact from './components/contact';

function App() {
  return (
    <>
    <CssBaseline/>
    <Route path="/" exact component={Home}/>
    <Route path="/resume"  component={Resume}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/contact" component={Contact} />
    </>
  );
}

export default App;
