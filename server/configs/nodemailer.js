const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.SCHOOLSCOOL_EMAIL,
    pass: process.env.SCHOOLSCOOL_PASSWORD,
  },
});
