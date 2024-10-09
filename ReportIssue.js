// src/pages/ReportIssue.js
import React, { useState } from 'react';
import './ReportIssue.css'; // Import CSS for styling

function ReportIssue() {
  const [issue, setIssue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the issue (e.g., API call)
    console.log('Reported Issue:', issue);
    setIssue(''); // Clear the textarea after submission
  };

  return (
    <div className="report-issue-container">
      <h2>Report an Issue</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          placeholder="Describe the issue" 
          value={issue} 
          onChange={(e) => setIssue(e.target.value)} 
          required 
        />
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
}

export default ReportIssue;
