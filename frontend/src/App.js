import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CompanyDetails from './components/CompanyDetails';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import InternshipPage from './components/InternshipPage';
import ApplyForm from './components/ApplyForm';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/company/:id" element={<CompanyDetails />} />
          <Route path="/internship" element={<InternshipPage />} />
          <Route path="/apply/:company" element={<ApplyForm />} />
          </Routes>
          </div>
          <Footer />
    </Router>
  );
}

export default App;
