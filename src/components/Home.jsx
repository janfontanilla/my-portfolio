/* eslint-disable no-unused-vars */
//Home.jsx Jan Fontanilla, 301380907, 2025-01-29
import React from 'react';
import { Link } from 'react-router-dom'; 
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio!</h1>
      <p>
        Hi, I&apos;m <strong>Jan Fontanilla</strong>, a Junior Software Developer passionate about building innovative, user-friendly applications. </p>
      <p>
        I am always exploring new technologies and improving my coding skills. Feel free to explore my site to learn more about me and my work!
      </p>
      <div className="home-buttons">
        <Link to="/about" className="home-link">About Me</Link>
        <Link to="/projects" className="home-link">Projects</Link>
        <Link to="/services" className="home-link">Services</Link>
        <Link to="/contact" className="home-link">Contact Me</Link>
      </div>
    </div>
  );
};

export default Home;
