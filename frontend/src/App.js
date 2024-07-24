import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
        <Route path="/signup" element={<Signup/>}>
           
          </Route>
        <Route path="/" element={<Login/>}>
           
          </Route>
          
        </Routes>
          
      </div>
    </Router>
  );
}

export default App;
