import './Footer.css'; // Import CSS for the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <p>Lynkr Inc.<br />All rights reserved</p>
          <a
            href="https://apps.apple.com/us/app/lynkr-app/id6463145067"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
              alt="App Store Download"
              className="app-store-icon"
            />
          </a>
        </div>

        {/* Vertical Divider */}
        <div className="footer-divider"></div>

        {/* Center Section */}
        <div className="footer-center">
          <p><strong>Contact</strong></p>
          <a href="mailto:emilywheeler@linkrme.net">emilywheeler@linkrme.net</a>
        </div>

        {/* Right Section with Social Icons */}
        <div className="footer-right">
          <a
            href="https://www.linkedin.com/company/lynkrapp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.icon-icons.com/icons2/2997/PNG/512/linkedin_logo_icon_187625.png"
              alt="LinkedIn"
              className="LinkedIn-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/lynkrapp/"
            alt="Instagram Account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.icon-icons.com/icons2/2997/PNG/512/instagram_logo_icon_187632.png"
              alt="Instagram"
              className="Instagram-icon"
            />
          </a>
          <img
            src="https://media.licdn.com/dms/image/v2/D4E0BAQGXomgXIq0Mqg/company-logo_200_200/company-logo_200_200/0/1708898115814/lynkr_app_logo?e=1738195200&v=beta&t=1i9jNLdjU5n-Ejzvh21DgaSJ_xz-bvy2_EVibtDww5k"
            alt="Lynkr Logo"
            className="lynkr-icon"
            //style={{ paddingRight: '3rem' }}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
