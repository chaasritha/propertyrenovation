// src/pages/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Election Transparency Dashboard</h1>

            <div className="cards-container">
                <div className="stat-card total-votes">
                    <h2>Total Votes Cast</h2>
                    <p>2,340</p>
                </div>
                <div className="stat-card total-candidates">
                    <h2>Total Candidates Registered</h2>
                    <p>72</p>
                </div>
                <div className="stat-card polling-stations">
                    <h2>Polling Locations</h2>
                    <p>28</p>
                </div>
            </div>

            <div className="info-section">
                <div className="news-updates">
                    <h2>Election News</h2>
                    <ul>
                        <li>Early Voting Begins Next Week!</li>
                        <li>New Security Measures Implemented.</li>
                        <li>Public Debates Now Streaming Online.</li>
                    </ul>
                </div>

                <div className="upcoming-events">
                    <h2>Key Events</h2>
                    <ul>
                        <li>Voter Education Workshop - Oct 12</li>
                        <li>Live Debate - Oct 18</li>
                        <li>Final Voting Day - Nov 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
