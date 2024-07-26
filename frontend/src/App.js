import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CompanyDetails from './components/CompanyDetails';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Applications from './components/Applications';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import InternshipPage from './components/InternshipPage';
import ApplyForm from './components/ApplyForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/company/:id" element={<CompanyDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/apply/:company" element={<ApplyForm />} />
      </Routes>
    </Router>
  );
}

export default App;
