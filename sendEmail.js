const nodemailer = require('nodemailer');
const { enquiryTemplate } = require('./enquiryTemplate');
const { adminTemplate } = require('./adminTemplate');

const sendEmail = async (type) => {
  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nithishkuma8123@gmail.com', // Your Gmail address
      pass: 'oxyk kuid bjvy hxwb'   // Your Gmail password
    }
  });

  let formData = {
    name: 'Nithish Kumar',
    email: 'nithishkuma8123@gmail',
    phone: '1234567890',
    subject: type === 'enquiry' ? 'Enquiry About [Software/Product Name]' : 'New Customer Inquiry Received',
    message: 'This is a test email.'
  }

  // Set up email data
  let mailOptions = {
    from: 'nithishkuma8123@gmail.com',          // Sender address
    to: "nithishkuma8123@gmail.com",                    // List of receivers
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