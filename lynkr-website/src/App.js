import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SponsorForm from './components/SponsorForm';
import ThankYou from './components/ThankYou';
import Layout from './components/Layout'; // Import the Layout component
import './App.css';

function App() {
  return (
    <Router>
      <Layout> {/* Wrap all routes with Layout */}
        <Routes>
          <Route path="/" element={<SponsorForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
