import nodemailer from "nodemailer";

export const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.MP,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: data.to,
      subject: data.subject,
      text: data.text,
      html: data.html,
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
