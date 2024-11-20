// backend/server.js
const nodemailer = require('nodemailer');
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email address from the .env file
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });


// Route to handle form submissions
// backend/server.js
// backend/server.js
app.post('/send-email', upload.single('coverImage'), async (req, res) => {
    try {
      const formData = req.body;
      const coverImage = req.file;
  
      // Prepare the email content
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'maxwcoop@gmail.com', // Replace with the recipient's email
        subject: `New Sponsor Form Submission from ${formData.companyName}`,
        html: `
          <p>You have received a new sponsor form submission. Here are the details:</p>
          <ul>
            <li><strong>Company Name:</strong> ${formData.companyName}</li>
            <li><strong>Email:</strong> ${formData.email}</li>
            <li><strong>Brand Activation:</strong> ${formData.brandActivation}</li>
            <li><strong>Organizations Don't Want to Sponsor:</strong> ${formData.exclusions}</li>
             <li><strong>Ideal Size of Event:</strong> ${formData.sizeOfEvent}</li>
            <p>For <strong>${formData.numberOfPeople} people</strong>, they will send <strong>${formData.amountOfProduct} of product(s)</strong>.</p>
            <li><strong>Shipping Notice:</strong> ${formData.shippingNoticeNumber} (${formData.shippingNoticePeriod})</li>
            <li><strong>Media Style:</strong> ${formData.mediaStyle}</li>
            <li><strong>Photos Required:</strong> ${formData.photosRequired}</li>
            <li><strong>Videos Required:</strong> ${formData.videosRequired}</li>
            <li><strong>Additional Materials:</strong> ${formData.additionalMaterials}</li>
          </ul>
          <p>Attachment: <em>See the attached cover image</em>.</p>
        `,
        attachments: [
          {
            filename: coverImage.originalname,
            path: coverImage.path,
          },
        ],
      };
  
      // Send the email
      await transporter.sendMail(mailOptions);
  
      // Delete the uploaded file after sending the email
      fs.unlink(coverImage.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
  
      console.log('Email sent successfully!');
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error occurred while processing /send-email:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  });