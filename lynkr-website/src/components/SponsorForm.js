import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SponsorForm.css'; // Import CSS for styling

function SponsorForm() {
  const navigate = useNavigate(); // Hook to navigate between routes

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    navigate('/thank-you'); // Redirect to the ThankYou page
  };

  return (
    <div className="background">  {/* This div will apply the pink background */}
      <div className="form-container">
      <h1 style={{ paddingTop: '2rem' }}>Want to Sponsor a University Event through Lynkr?</h1>
        {/* Add onSubmit event to the <form> */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Company Name" required />
            <input type="text" placeholder="What do you require in return?" required />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Contact Email" required />
            <select required>
              <option value=""># people in attendance</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>

          <div className="form-group">
            <input type="text" placeholder="Describe your Ideal Brand Activation:" />
            <input type="text" placeholder="Any organizations you don’t want to sponsor?" />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Will you be shipping marketing materials?" />
            <select required>
              <option value=""># days before to ship marketing materials</option>
              <option value="1">1</option>
              <option value="7+">7+</option>
              <option value="14+">14+</option>
            </select>
          </div>

          <div className="form-group">
            <input type="text" placeholder="Describe the Style of Photos and Videos you Require:" />
          </div>

          <div className="form-group">
            <select required>
              <option value=""># photos required</option>
              <option value="1">1</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10+">10+</option>
            </select>
            <select required>
              <option value=""># videos required</option>
              <option value="1">1</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10+">10+</option>
            </select>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SponsorForm;
