import React from 'react';
import './SponsorForm.css'; // Import CSS for styling

function SponsorForm() {
  return (
    <div className="background">  {/* This div will apply the pink background */}
    <div className="form-container">
      <h1>Want to Sponsor a University Event through Lynkr?</h1>
      <form>
        <div className="form-group">
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="What do you require in return?" />
        </div>

        <div className="form-group">
          <input type="email" placeholder="Contact Email" />
          <select>
            <option value=""># people in attendance</option>
          </select>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Describe your Ideal Brand Activation:" />
          <input type="text" placeholder="Any organizations you don’t want to sponsor?" />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Will you be shipping marketing materials?" />
          <select>
            <option value=""># days before</option>
          </select>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Describe the Style of Photos and Videos you Require:" />
        </div>

        <div className="form-group">
          <select>
            <option value=""># photos required</option>
          </select>
          <select>
            <option value=""># videos required</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  </div>
  );
}

export default SponsorForm;
