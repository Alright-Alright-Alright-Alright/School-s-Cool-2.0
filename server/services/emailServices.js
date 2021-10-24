const { transporter } = require("../configs/nodemailer");

const sendEmailService = async (userEmail, subject, emailBody) => {
    try {
    transporter.sendMail({
      to: userEmail,
      from: process.env.SCHOOLSCOOL_EMAIL,
      subject: subject,
      //   icalEvent: {
      //     filename: "invitation.ics",
      //     method: "request",
      //     content: content,
      //   },
      html: emailBody
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  sendEmailService,
};
