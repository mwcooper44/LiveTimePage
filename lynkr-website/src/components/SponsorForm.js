import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SponsorForm.css';

function SponsorForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    requirements: '',
    coverImage: null,
    email: '',
    attendance: '',
    brandActivation: '',
    exclusions: '',
    shipping: '',
    shippingDays: '',
    mediaStyle: '',
    photosRequired: '',
    videosRequired: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      coverImage: e.target.files[0], // Store the uploaded file in formData
    });
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 6));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  // Validation for each step
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.companyName && formData.email && formData.coverImage;
      case 2:
        return formData.brandActivation;
      case 3:
        return true; // Optional fields in step 3, so always valid
      case 4:
        return formData.shipping && formData.shippingDays;
      case 5:
        return formData.mediaStyle;
      case 6:
        return formData.photosRequired && formData.videosRequired;
      default:
        return false;
    }
  };

  return (
    <div className="background">
      <h1 style={{ paddingTop: '2rem', textAlign: 'center' }}>Want to Sponsor a University Event Through Lynkr?</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="form-group">
              <div>
                <label htmlFor="companyName">Company Name</label>
                <input type="text" id="companyName" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="contactEmail">Contact Email</label>
                <input type="email" name="email" placeholder="ex: johnsmith@gmail.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="coverImage">Upload a Cover Image</label>
                <input type="file" id="coverImage" name="coverImage" onChange={handleFileChange} />
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className="form-group">
              <div>
                <label htmlFor="brandActivation">What does your Ideal Brand Activation Look Like?</label>
                <input type="text" name="brandActivation" placeholder="Describe your Ideal Brand Activation:" value={formData.brandActivation} onChange={handleChange} />
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div className="form-group">
              <div>
                <label htmlFor="exclusions">Are there Any Organizations you don't want to Sponsor?</label>
                <input type="text" name="exclusions" placeholder="ex: Greek Life, Professional, etc. N/A if none" value={formData.exclusions} onChange={handleChange} />
              </div>
              
            </div>
          )}
          {currentStep === 4 && (
            <div className="form-group">
              <div></div>
              <input type="text" name="shipping" placeholder="Will you be shipping marketing materials?" value={formData.shipping} onChange={handleChange} required />
              <select name="shippingDays" value={formData.shippingDays} onChange={handleChange} required>
                <option value=""># days before to ship marketing materials</option>
                <option value="1">1</option>
                <option value="7+">7+</option>
                <option value="14+">14+</option>
              </select>
            </div>
          )}
          {currentStep === 5 && (
            <div className="form-group">
              <input type="text" name="mediaStyle" placeholder="Describe the Style of Photos and Videos you Require:" value={formData.mediaStyle} onChange={handleChange} required />
            </div>
          )}
          {currentStep === 6 && (
            <div className="form-group">
              <select name="photosRequired" value={formData.photosRequired} onChange={handleChange} required>
                <option value=""># photos required</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10+">10+</option>
              </select>
              <select name="videosRequired" value={formData.videosRequired} onChange={handleChange} required>
                <option value=""># videos required</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10+">10+</option>
              </select>
            </div>
          )}

          <div className="form-navigation">
            {currentStep > 1 && (
              <div className="back-button-container">
                <button type="button" onClick={prevStep} className="nav-button">
                  Back
                </button>
              </div>
            )}
            <div className="next-button-container">
              {currentStep < 6 ? (
                <button type="button" onClick={nextStep} className="nav-button" disabled={!isStepValid()}>
                  Next
                </button>
              ) : (
                <button type="submit" className="submit-button" disabled={!isStepValid()}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SponsorForm;
