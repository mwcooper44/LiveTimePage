import './Footer.css'; // Import CSS for the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Lynkr Inc.<br />All rights reserved</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
          alt="App Store"
          className="app-store-icon"
        />
      </div>

      <div className="footer-center">
        <p><strong>Contact</strong></p>
        <a href="mailto:emilywheeler@linkrme.net">
          emilywheeler@linkrme.net
        </a>
      </div>

      <div className="footer-right">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="social-icon" />
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="social-icon" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Flamingo_Pink.svg" alt="Flamingo" className="flamingo-icon" />
      </div>
    </footer>
  );
}

export default Footer;
