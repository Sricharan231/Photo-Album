// // server/server.js
// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: '',
//     pass: '',
//   },
// });

// app.post('/send-email', async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     const mailOptions = {
//       from: 'guptamanshu8835@gmail.com',
//       to: 'guptamanisha8835@gmail.com',
//       subject: 'Contact Form Submission',
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     await transporter.sendMail(mailOptions);
//     res.sendStatus(200);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while sending the email.' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
