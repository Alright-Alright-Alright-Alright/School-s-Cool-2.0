const bcrypt = require("bcryptjs");
const { sendEmailService } = require("../services/emailServices");
const { createNewUser, forgetPasswordDb } = require("../db/authDb");
const crypto = require("crypto");

exports.newUser = async (firstName, lastName, email, password) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    await createNewUser(firstName, lastName, email, hashPass);

    sendEmailService(
      email,
      "Succefull register!",
      `<p>Welcome to School's Cool ${firstName} ${lastName}, <br>
      <br> Please login to use the web application. <br><br> Thank you.</p>`
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.forgetPasswordService = async (email) => {
  crypto.randomBytes(32, async (err, buffer) => {
    try {
      if (err) {
        res.status(500).json(err);
      }

      const forgetPasswordToken = buffer.toString("hex");

      sendEmailService(
        email,
        "Password Reset",
        `<h4>Hey buddy,</h4> <br/>
        <h4>You requested us to reset your password, please, click <a href="${process.env.FRONTEND_URL}/forgot/${forgetPasswordToken}">here</a> to set a new one.</h4><br/>
        <h5>Best Regards, <br/>
        School's Cool</h5>`
      );
      return await forgetPasswordDb(email, forgetPasswordToken);
    } catch (error) {
      throw new Error(error);
    }
  });
};
