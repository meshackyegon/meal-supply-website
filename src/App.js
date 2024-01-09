// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importing 'Routes' instead of 'Switch'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StudentDashboard from './pages/StudentDashboard';
import DonorDashboard from './pages/DonorDashboard';
import SchoolAdminDashboard from './pages/SchoolAdminDashboard';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Routes>  {/* Using 'Routes' instead of 'Switch' */}
        <Route path="/" element={<Home />} />  
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/donor" element={<DonorDashboard />} />
        <Route path="/school-admin" element={<SchoolAdminDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <h1>Welcome to the Meal Supply Website!</h1> {/* Displaying welcome message */}
    </Router>
  );
};

export default App;
