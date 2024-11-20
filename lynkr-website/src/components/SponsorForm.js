import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SponsorForm.css';
import axios from 'axios';
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
    sizeOfEvent: '',
    numberOfPeople: '',
    amountOfProduct: '',
    shipping: '',
    shippingNoticeNumber: '',
    shippingNoticePeriod: '',
    mediaStyle: '',
    photosRequired: '',
    videosRequired: '',
    additionalMaterials: '',
  });
  const [showPhotosDropdown, setShowPhotosDropdown] = useState(false);
  const [showVideosDropdown, setShowVideosDropdown] = useState(false);
  const [showMarketing, setShowMarketing] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added isLoading state

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      // Prepare form data
      const data = new FormData();
  
      // Append non-file fields explicitly
      data.append('companyName', formData.companyName);
      data.append('email', formData.email);
      data.append('attendance', formData.attendance);
      data.append('brandActivation', formData.brandActivation);
      data.append('exclusions', formData.exclusions);
      data.append('sizeOfEvent', formData.sizeOfEvent);
      data.append('numberOfPeople', formData.numberOfPeople);
      data.append('amountOfProduct', formData.amountOfProduct);
      data.append('shipping', formData.shipping);
      data.append('shippingNoticeNumber', formData.shippingNoticeNumber);
      data.append('shippingNoticePeriod', formData.shippingNoticePeriod);
      data.append('mediaStyle', formData.mediaStyle);
      data.append('photosRequired', formData.photosRequired);
      data.append('videosRequired', formData.videosRequired);
      data.append('additionalMaterials', formData.additionalMaterials);
      // Append other non-file fields as needed
  
      // Append the cover image file
      data.append('coverImage', formData.coverImage); // Field name must be 'coverImage'
  
      // Send the form data to the backend
      const response = await axios.post('http://localhost:5001/send-email', data);
  
      if (response.status === 200) {
        console.log('Email sent successfully!');
        navigate('/thank-you');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('An error occurred:', error);
  
      if (error.response) {
        console.error('Server responded with:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
  
      alert('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      coverImage: e.target.files[0],
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const togglePhotosDropdown = () => setShowPhotosDropdown(!showPhotosDropdown);
  const toggleVideosDropdown = () => setShowVideosDropdown(!showVideosDropdown);
  const toggleAdditionalMarketingMaterials = () => setShowMarketing(!showMarketing);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 6));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.companyName && formData.email && formData.coverImage;
      case 2:
        return formData.brandActivation;
      case 3:
        return formData.exclusions;
      case 4:
        return formData.sizeOfEvent && formData.numberOfPeople && formData.amountOfProduct;
      case 5:
        return true; // Optional step
      case 6:
        return (
          formData.shippingNoticeNumber &&
          formData.shippingNoticePeriod &&
          (!showMarketing || (formData.additionalMaterials && showMarketing))
        );
      default:
        return false;
    }
  };

  return (
    <div className="background">
      <h1 style={{ paddingTop: '2rem', textAlign: 'center' }}>
        Want to Sponsor a University Event Through Lynkr?
      </h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="form-group">
              <div>
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Contact Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ex: johnsmith@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="coverImage">Upload a Cover Image</label>
                <input
                  type="file"
                  id="coverImage"
                  name="coverImage"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className="form-group">
              <div>
                <label htmlFor="brandActivation">
                  What does your Ideal Brand Activation Look Like?
                </label>
                <input
                  type="text"
                  name="brandActivation"
                  placeholder="Describe your Ideal Brand Activation:"
                  value={formData.brandActivation}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div className="form-group">
              <div>
                <label htmlFor="exclusions">
                  Are there Any Organizations you don't want to Sponsor?
                </label>
                <input
                  type="text"
                  name="exclusions"
                  placeholder="ex: Greek Life, Professional, etc. N/A if none"
                  value={formData.exclusions}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}
          {currentStep === 4 && (
            <div className="form-group">
              <div>
                <label htmlFor="sizeOfEvent">Ideal Size of Event:</label>
                <select
                  name="sizeOfEvent"
                  value={formData.sizeOfEvent}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Ideal # of people in attendance
                  </option>
                  <option value="0-25">0-25</option>
                  <option value="25-50">25-50</option>
                  <option value="50-100">50-100</option>
                  <option value="100+">100+</option>
                </select>
              </div>
              <div>
                <label>
                  How much Product will you send for X number of People?
                </label>
                <label className="example">
                  ex: We will send 2 cases of product for every 20 people in
                  attendance.
                </label>
                <label>For every X number of people,</label>
                <input
                  type="text"
                  name="numberOfPeople"
                  placeholder="5, 25, 50 people"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>we will send Y of Product.</label>
                <input
                  type="text"
                  name="amountOfProduct"
                  placeholder="Please specify: 1 case, 5 boxes, 2 pallets, etc."
                  value={formData.amountOfProduct}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}
          {currentStep === 5 && (
            <div className="form-group">
              <label>Content Requirements?</label>
              <div>
                <div className="checkbox-container">
                  <label htmlFor="photosCheckbox">Photos</label>
                  <input
                    type="checkbox"
                    id="photosCheckbox"
                    name="photosCheckbox"
                    className="custom-checkbox"
                    onChange={(e) => {
                      togglePhotosDropdown();
                      handleChange(e);
                    }}
                  />
                </div>
                {showPhotosDropdown && (
                  <select
                    name="photosRequired"
                    value={formData.photosRequired}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      # photos required
                    </option>
                    <option value="1-3">1-3</option>
                    <option value="3-5">3-5</option>
                    <option value="5-10">5-10</option>
                    <option value="10+">10+</option>
                  </select>
                )}
              </div>
              <div>
                <div className="checkbox-container">
                  <label htmlFor="videosCheckbox">Videos</label>
                  <input
                    type="checkbox"
                    id="videosCheckbox"
                    name="videosCheckbox"
                    className="custom-checkbox"
                    onChange={(e) => {
                      toggleVideosDropdown();
                      handleChange(e);
                    }}
                  />
                </div>
                {showVideosDropdown && (
                  <select
                    name="videosRequired"
                    value={formData.videosRequired}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      # videos required
                    </option>
                    <option value="1-3">1-3</option>
                    <option value="3-5">3-5</option>
                    <option value="5-10">5-10</option>
                    <option value="10+">10+</option>
                  </select>
                )}
              </div>
              <div>
                <label htmlFor="mediaStyle">
                  (Optional): Describe any content preferences:
                </label>
                <input
                  type="text"
                  id="mediaStyle"
                  name="mediaStyle"
                  placeholder="ex: logos facing camera, people engaged in activities"
                  value={formData.mediaStyle}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
          {currentStep === 6 && (
            <div className="form-group">
              <label htmlFor="shipping">
                Event Notice Required for Shipping Product:
              </label>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="shippingNotice"
              >
                <input
                  type="text"
                  id="shippingNoticeNumber"
                  name="shippingNoticeNumber"
                  placeholder="Please enter a number:"
                  value={formData.shippingNoticeNumber}
                  onChange={handleChange}
                  required
                />
                <select
                  name="shippingNoticePeriod"
                  value={formData.shippingNoticePeriod}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Period of time
                  </option>
                  <option value="day(s)">day(s)</option>
                  <option value="week(s)">week(s)</option>
                  <option value="month(s)">month(s)</option>
                </select>
              </div>

              <div>
                <div className="checkbox-container">
                  <label htmlFor="marketingCheckbox">
                    Will you be providing Additional Marketing Materials?
                  </label>
                  <input
                    type="checkbox"
                    id="marketingCheckbox"
                    name="marketingCheckbox"
                    className="custom-checkbox"
                    onChange={(e) => {
                      toggleAdditionalMarketingMaterials();
                      handleChange(e);
                    }}
                  />
                </div>
                {showMarketing && (
                  <input
                    type="text"
                    id="additionalMaterials"
                    name="additionalMaterials"
                    placeholder="ex: merch, banners, flags"
                    value={formData.additionalMaterials}
                    onChange={handleChange}
                  />
                )}
              </div>
            </div>
          )}

          <div className="form-navigation">
            {currentStep > 1 && (
              <div className="back-button-container">
                <button
                  type="button"
                  onClick={prevStep}
                  className="nav-button"
                  disabled={isLoading}
                >
                  Back
                </button>
              </div>
            )}
            <div className="next-button-container">
              {currentStep < 6 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="nav-button"
                  disabled={!isStepValid() || isLoading}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="submit-button"
                  disabled={!isStepValid() || isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
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