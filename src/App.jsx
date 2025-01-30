/* eslint-disable no-unused-vars */
//App.jsx Jan Fontanilla, 301380907, 2025-01-29
import React from 'react';
import Navbar from './components/NavBar';  
import MainRouter from './MainRouter';  
const App = () => {
  return (
    <div>
      <Navbar />  {/* Render Navbar on all pages */}
      <MainRouter />  {/* The Router will render the correct page based on the route */}
    </div>
  );
};

export default App;
