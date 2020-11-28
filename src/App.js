import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Typography } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import './App.css';



function App() {
  
  return (
    
 
      
      <>
      <h1>Unified Wellness</h1>
   
      <Router>
      <Navbar />
        <Route exact path="/">
          
        </Route>
       </Router>
     
      </>

   
  );
}

export default App;
