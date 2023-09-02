const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/submit',(req,res) => {
    res.send('App is running...');
})

app.post("/submit", async (req, res) => {
    const { firstName, lastName, email, message } = req.body;
    console.log(req.body);
  
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "hitforkzesus@gmail.com", // Replace with your email
        pass: "ppjkmkyralvsrmys"   // Replace with your email password or App Password
      }
    });
  
    const mailOptions = {
      from: "hitforkzesus@gmail.com",
      to: "rakesh20nitdgp@gmail.com", // Replace with recipient's email
      subject: "New Contact Form Submission",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Message: ${message}
      `
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while sending the email" });
    }
  });
  

exports.api = functions.https.onRequest(app);
