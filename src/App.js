import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Typography } from "@material-ui/core";
import Home from "./components/Pages/Home";
import Fitness from "./components/Pages/Fitness";
import Nature from "./components/Pages/Nature";
import Nutrition from "./components/Pages/Nutrition";
import Yoga from "./components/Pages/Yoga";
import Navbar from "./components/Navbar/Navbar";
import './App.css';



function App() {
  
  return (
    
 
      
      <>
      <Typography variant="h1">Unified Wellness</Typography>
   
      <Router>
        <Navbar />
        <Route exact path="/"><Home /></Route>
        <Route path="/fitness"><Fitness /></Route>
        <Route path="/nature"><Nature /></Route>
        <Route path="/nutrition"><Nutrition /></Route>
        <Route path="/yoga"><Yoga /></Route>
      </Router>
     
      </>

   
  );
}

export default App;
