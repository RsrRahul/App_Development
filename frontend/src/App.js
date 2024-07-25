// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import CompanyDetails from './components/CompanyDetails';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
        <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/company/:id" element={<CompanyDetails />} />
          </Routes>
        </main>
       
      </div>
    </Router>
  );
}

export default App;
