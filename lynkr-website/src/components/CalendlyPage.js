import React from 'react';
import { InlineWidget } from 'react-calendly';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './CalendlyPage.css'; // Import the CSS file

function CalendlyPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="container">
      <div className="calendly-widget">
        <InlineWidget url="https://calendly.com/emilyxxwheeler/lynkr" />
      </div>
      <button 
        onClick={() => navigate('/')} // Redirect to the home page (Sponsor Form)
        className="button"
      >
        Home
      </button>
    </div>
  );
}

export default CalendlyPage;