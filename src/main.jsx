/* eslint-disable no-unused-vars */
//main.jsx Jan Fontanilla, 301380907, 2025-01-29
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter.jsx';
import Navbar from './components/NavBar';  
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Navbar /> 
        <MainRouter /> 
    </BrowserRouter>
);
