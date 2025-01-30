/* eslint-disable no-unused-vars */
//Navbar.jsx Jan Fontanilla, 301380907, 2025-01-29
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"; 

const Navbar = () => {
  return (
    <nav>
        <a>
        <img src={logo} alt="Logo" className="logo" width="30px" height="auto"/>
      </a>
      <ul>
        <li><Link to="/">Home</Link></li>  
        <li><Link to="/about">About Me</Link></li> 
        <li><Link to="/projects">Projects</Link></li>  
        <li><Link to="/services">Services</Link></li>  
        <li><Link to="/contact">Contact</Link></li>  
      </ul>
    </nav>
  );
};

export default Navbar;
