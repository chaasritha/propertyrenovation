// src/pages/Signup.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './Signup.css'; // Import the CSS file

function Signup() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Here, you would normally handle signup logic (API call, etc.)
    // After successful signup, navigate to the login page
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" required />
          </div>
          <button type="submit">Signup</button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/login" className="nav-link">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
