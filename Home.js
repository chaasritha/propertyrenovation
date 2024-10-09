// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1 className="welcome-message">
          <span className="welcome-text">Welcome to the </span>
          <span className="election-text">Election Monitoring </span>
          <span className="system-text">System!</span>
        </h1>
        <p className="subtext">
          Empowering transparency, fairness, and civic engagement in elections.
        </p>
        <div className="button-container">
          <Link to="/login">
            <button className="action-button">Login</button>
          </Link>
          <Link to="/signup">
            <button className="action-button">Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
