/* eslint-disable no-unused-vars */
//Navbar.jsx Jan Fontanilla, 301380907, 2025-01-29
import React from 'react';
import { Link } from 'react-router-dom';  // Use Link for navigation

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>  {/* Link to Home */}
        <li><Link to="/about">About Me</Link></li>  {/* Link to About Me */}
        <li><Link to="/projects">Projects</Link></li>  {/* Link to Projects */}
        <li><Link to="/services">Services</Link></li>  {/* Link to Services */}
        <li><Link to="/contact">Contact</Link></li>  {/* Link to Contact */}
      </ul>
    </nav>
  );
};

export default Navbar;
