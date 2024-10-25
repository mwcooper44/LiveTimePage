import './Footer.css'; // Import CSS for the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Lynkr Inc.<br />All rights reserved</p>
          <a href="https://apps.apple.com/us/app/lynkr-app/id6463145067" target="_blank" rel="noopener noreferrer">
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
            alt="App Store Download"
            className="app-store-icon"
            />
        </a>
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
