const { transporter } = require("../configs/nodemailer");

const sendEventInviteEmailService = async (userEmail, eventName) => {
  console.log(eventName)
  
    try {
    transporter.sendMail({
      to: userEmail,
      from: process.env.SCHOOLSCOOL_EMAIL,
      subject: `You've been invited to join`,
      //   icalEvent: {
      //     filename: "invitation.ics",
      //     method: "request",
      //     content: content,
      //   },
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  sendEventInviteEmailService,
};
