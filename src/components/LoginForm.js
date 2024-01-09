// src/components/LoginForm.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';  // Import your AuthContext
import { login as authServiceLogin } from '../services/authService'; // Import your authService

const LoginForm = () => {
  const { setUser } = useAuth(); // Assume you have a context for authentication
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userRole = determineUserRole(formData.username);

      const user = await authServiceLogin(formData.username, formData.password);

      if (user && user.role === userRole) {
        setUser(user); // Update user context with the authenticated user
        // Redirect or handle based on the user role
        switch (userRole) {
          case 'admin':
            // Redirect or handle admin login
            break;
          case 'donor':
            // Redirect or handle donor login
            break;
          case 'schoolAdmin':
            // Redirect or handle school admin login
            break;
          case 'student':
            // Redirect or handle student login
            break;
          default:
            // Handle unknown user role
            break;
        }
      } else {
        console.error('Login failed: Invalid user or role');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const determineUserRole = (username) => {
    // Logic to determine the user role based on the username
    // For simplicity, assuming admin, donor, schoolAdmin, student as possible roles
    if (username.includes('admin')) {
      return 'admin';
    } else if (username.includes('donor')) {
      return 'donor';
    } else if (username.includes('schoolAdmin')) {
      return 'schoolAdmin';
    } else {
      return 'student';
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 border rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:border-indigo-500 sm:text-sm"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:border-indigo-500 sm:text-sm"
            />
          </label>

          <button
            type="submit"
            className="w-full py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>
        <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
