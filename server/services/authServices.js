const bcrypt = require("bcryptjs");
const { sendEmailService } = require("../services/emailServices");
const {
  createNewUser,
  forgetPasswordDb,
  newPasswordDb,
  loginUser,
} = require("../db/authDb");
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

exports.loginUserService = async (email, password) => {
  try {
    return await loginUser(email, password)
  } catch (error) {
    throw new Error(error.message);
  }
}

exports.forgetPasswordService = async (email) => {
  try {
    let forgetPasswordToken = crypto.randomBytes(32).toString("hex");
    sendEmailService(
      email,
      "Password Reset",
      `<h4>Hey buddy,</h4> <br/>
        <h4>You requested us to reset your password, please, click <a href="${process.env.CORS_ALLOWED}/new-password/${forgetPasswordToken}">here</a> to set a new one.</h4><br/>
        <h5>Best Regards, <br/>
        School's Cool</h5>`
    );
    let user = await forgetPasswordDb(email, forgetPasswordToken);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.newPasswordService = async (newPassword, token) => {
  try {
    let hashedpassword = await bcrypt.hash(newPassword, 10)
    return await newPasswordDb(hashedpassword, token);
  } catch (error) {
    throw new Error(error.message);
  }
};
