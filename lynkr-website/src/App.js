import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SponsorForm from './components/SponsorForm';
import ThankYou from './components/ThankYou';
import CalendlyPage from './components/CalendlyPage';
import Layout from './components/Layout'; // Import the Layout component
import './App.css';
import CalendlyPage from './components/CalendlyPage';


function App() {
  return (
    <Router>
      <Layout> {/* Wrap all routes with Layout */}
        <Routes>
          <Route path="/" element={<SponsorForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/calendly" element={<CalendlyPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
