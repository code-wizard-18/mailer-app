const nodemailer = require('nodemailer');
const { enquiryTemplate } = require('./enquiryTemplate');
const { adminTemplate } = require('./adminTemplate');

const sendEmail = async (type,data) => {
  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'karinternationalinfotech@gmail.com', // Your Gmail address
      pass: 'IloveKAR@006'   // Your Gmail password
    }
  });

  let formData = data

  // Set up email data
  let mailOptions = {
    from: 'nithishkuma8123@gmail.com',          // Sender address
    to: formData.email,                    // List of receivers
    subject: `Enquiry Submission: ${formData.subject}`, // Subject line
    html: type === 'enquiry' ? enquiryTemplate(formData) : adminTemplate(formData)
  };

  // Send mail with defined transport object
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email: ' + error.message);
  }
};

module.exports = { sendEmail };