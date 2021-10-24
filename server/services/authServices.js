const bcrypt = require("bcryptjs");
const { sendEmailService } = require("../services/emailServices");
const { createNewUser } = require("../db/authDb");

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
