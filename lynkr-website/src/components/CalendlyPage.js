import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CalendlyPage.css'; // Import CSS for styling

function CalendlyPage() {
const navigate = useNavigate();

  return (
    <div className="background">  {/* This div will apply the pink background */} 
        <button onClick={() => navigate('/')} className="home-button">Home</button>
    </div>
  );
}

export default CalendlyPage;