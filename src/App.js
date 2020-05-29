import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home/Home';
import Navigationbar from './components/Navbar/Navigationbar';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Stars from './components/Stars/Stars';

function App() {

  

  return (
    <div className="app  background">

        <Home className="fixed-position"/>
        <div className="heading">
            About Me
            
        </div>
        
        <AboutMe  className="fixed-position"/>
        <div className="heading">
            Projects
        </div>
        <Projects  className="fixed-position"/>
        <div className="heading">
            Publications
        </div>
        <Blogs className="fixed-position"/>
        <div className="heading">
            Contact Me
        </div>
        <ContactMe className="fixed-position"/>

    
    </div>
  );
}

export default App;
