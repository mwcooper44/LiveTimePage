import React from 'react';
import { InlineWidget } from 'react-calendly';
import './CalendlyPage.css'; // Import the CSS file

function CalendlyPage() {
  return (
    <div className="container">
      <div className="calendly-widget">
        <InlineWidget url="https://calendly.com/emilyxxwheeler/lynkr" />
      </div>
      <button 
        onClick={() => window.history.back()} 
        className="button"
      >
        Home
      </button>
    </div>
  );
}

export default CalendlyPage;
