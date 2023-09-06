const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
// app.use(cors());
app.use(bodyParser.json());

// Create a Nodemailer transporter with your SMTP settings
const transporter = nodemailer.createTransport({
  service: 'your-email-service', // e.g., 'Gmail', 'Outlook', or use SMTP settings
  auth: {
    user: 'your-email@example.com', // Replace with your email address
    pass: 'your-email-password', // Replace with your email password
  },
});

// Route to send an email
app.post('/send-email', (req, res) => {
  console.log("pooja");
  alert('pooja');
  const { to, subject, message } = req.body;

  const mailOptions = {
    from: 'poojadhamanekar259@gmail.com', // Replace with your email address
    to,
    subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
