import React from 'react';
import './ThankYou.css'; // Import CSS for styling

function ThankYou() {
  return (
    <div className="background">  {/* This div will apply the pink background */}
    <div className="form-container">
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Thank You</h1>
        <p>We appreciate your interest. We’ll get back to you soon!</p>
        </div>
    </div>
  </div>
  );
}

export default ThankYou;
