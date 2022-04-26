// import { Router, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch> 
        <Route path='/' />
      </Switch> 
    </Router>
  );
}

export default App;
