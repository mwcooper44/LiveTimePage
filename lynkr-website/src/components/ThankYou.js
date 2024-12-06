import React from 'react';
import { InlineWidget } from 'react-calendly';
import { useNavigate } from 'react-router-dom';
import './ThankYou.css'; // Import CSS for styling

function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="background">
      {/* This div applies the pink background */}
      <div className="thank-you">
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Thank You</h1>
          <p>We appreciate your interest. We’ll get back to you soon!</p>
        </div>

        
      </div>
      {/* Calendly Widget */}
      <div className="calendly-widget-thank-you">
          <InlineWidget url="https://calendly.com/emilyxxwheeler/lynkr" />
        </div>

        {/* Home Button */}
        <button
          onClick={() => navigate('/')} // Navigate to home page
          className="button"
        >
          Home
        </button>
    </div>
  );
}

export default ThankYou;