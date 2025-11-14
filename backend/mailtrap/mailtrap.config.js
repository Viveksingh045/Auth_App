import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "api",
    pass: process.env.MAILTRAP_TOKEN,   // your Mailtrap LIVE API token
  },
});

const sendEmail = async () => {
  await transporter.sendMail({
    from: '"Mailtrap Test" <mailtrap@demomailtrap.com>',   // IMPORTANT
    to: "thinkwithvivek6788@gmail.com",
    subject: "Testing Mailtrap Live SMTP",
    text: "This is a real email sent using Mailtrap Live SMTP.",
  });

  console.log("Email sent!");
};

sendEmail();
