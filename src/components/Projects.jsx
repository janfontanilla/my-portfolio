/* eslint-disable no-unused-vars */
//Projects.jsx Jan Fontanilla, 301380907, 2025-01-29
import React from 'react';
import CalendlyCloneImage from '../assets/images/CalendlyClone.png';
import CryptoCurrencyImage from '../assets/images/CryptoCurrencyPurchaseAdvisorPlatform.png';
import WeatherAppImage from '../assets/images/WeatherApp.png';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      
      <div className="project-item">
        <h2>Project 1: CalendlyClone</h2>
        <img src={CalendlyCloneImage} alt="Calendly Clone" width="300" />
        <p>a clone of Calendly, a popular scheduling app, using Next.js 14, Tailwind CSS, React, and the Nylas API. This project focuses on handling date and time manipulation, and time zone integration. This project focuses on allowing users to schedule meetings, manage their availability while syncrhonizing their calender events. Future improvements will include AI for schedule optimization.</p>
      </div>

      <div className="project-item">
        <h2>Project 2: Cryptocurrency Purchase Advisor Platform</h2>
        <img src={CryptoCurrencyImage} alt="Crypto Currency Purchase Advisor" width="700" />
        <p>Work in Progress, Crypto currency blockchain purchase platform with features reccomending users optimal times to purchase units. Uses DexScreener&apos;s API to fetch blockchain cryptocurrency key data such as marketcap, liquidity, and creation date</p>
      </div>

      <div className="project-item">
        <h2>Project 3: Weather App</h2>
        <img src={WeatherAppImage} alt="Weather App" width="200" />
        <p>Built using HTML, CSS and Javascript, this Weather App allows users to get real-time weather information for any city of their choice. By integrating OpenWeatherMap&apos;s free API, the app fetches and displays key weather data such as temperature, weather conditions, humidity, and wind speed.</p>
      </div>
    </div>
  );
};

export default Projects;
