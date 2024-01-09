// src/components/SignupForm.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const SignupForm = () => {
  const { signup } = useAuth();
  const [userData, setUserData] = useState({ fname: '', lname: '', email: '', password: '' });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(userData);
      // Redirect or perform any additional actions after successful signup
    } catch (error) {
      console.error('Signup failed', error.message);
      // Handle signup error, e.g., display an error message
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>First Name:</label>
        <input
          type="text"
          value={userData.fname}
          onChange={(e) => setUserData({ ...userData, fname: e.target.value })}
        />

        <label>Last Name:</label>
        <input
          type="text"
          value={userData.lname}
          onChange={(e) => setUserData({ ...userData, lname: e.target.value })}
        />

        <label>Email:</label>
        <input
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />

        <label>Password:</label>
        <input
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />

        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignupForm;
