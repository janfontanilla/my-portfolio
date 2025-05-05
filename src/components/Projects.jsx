/* eslint-disable no-unused-vars */
// Projects.jsx Jan Fontanilla, 301380907, 2025-01-29
import React from 'react';
import VoomImage from '../assets/images/voom.png';
import EduTutorImage from '../assets/images/EduTutor.png';
import WeatherAppImage from '../assets/images/WeatherApp.png';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      
      <div className="project-item">
        <h2>Project 1: Voom</h2>
        <img src={VoomImage} alt="Voom App" width="250" />
        <p>Built a full-stack mobile experience using React Native, Expo, TypeScript, and PostgreSQL. Features include onboarding, secure email and OAuth authentication, real-time map-based ride booking with Google Maps and Places Autocomplete, Stripe payment integration, user profile, and trip history. Zustand was used for state management across 15+ modules, with Clerk for authentication. Processed 200+ simulated Stripe transactions with 1.8s average payment latency.</p>
      </div>

      <div className="project-item">
        <h2>Project 2: EduTutor</h2>
        <img src={EduTutorImage} alt="EduTutor Platform" width="500" />
        <p>Developed a responsive React frontend for an AI-driven document ingestion platform during a remote co-op placement. Implemented interactive UI components to enhance user experience with uploaded documents. Managed application state and integrated real-time API connections to ensure seamless communication between frontend and backend services.</p>
      </div>

      <div className="project-item">
        <h2>Project 3: Weather App</h2>
        <img src={WeatherAppImage} alt="Weather App" width="400" />
        <p>Built using HTML, CSS and Javascript, this Weather App allows users to get real-time weather information for any city of their choice. By integrating OpenWeatherMap&apos;s free API, the app fetches and displays key weather data such as temperature, weather conditions, humidity, and wind speed.</p>
      </div>
    </div>
  );
};

export default Projects;
