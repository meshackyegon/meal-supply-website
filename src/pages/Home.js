// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Meal Supply Website</h1>
            <p className="text-lg">
                This website is designed to facilitate meal supply for students through donations from
                generous donors. Explore the features and functionalities provided for different user roles.
            </p>
            <div className="mt-8">
                <Link to="/login" className="text-lg mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </Link>
            </div>
            <div className="mt-4">
                <Link to="/signup" className="text-lg bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Register
                </Link>
            </div>
        </div>
    );
};

export default Home;
