import React from 'react';
import Footer from './Footer'; // Import the Footer component

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="content">
        {children} {/* Render the page content */}
      </div>
      <Footer /> {/* Footer will appear on all pages */}
    </div>
  );
}

export default Layout;
