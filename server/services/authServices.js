const bcrypt = require("bcryptjs");
const passport = require("passport");
const { transporter } = require("../configs/nodemailer");
const { createNewUser } = require("../db/authDb");

exports.newUser = async (firstName, lastName, email, password) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = await createNewUser(firstName, lastName, email, hashPass);
    console.log(newUser);

    transporter.sendMail({
      to: newUser.email,
      from: process.env.SCHOOLSCOOL_EMAIL,
      subject: "Succefull register!",
      html: `<p>Welcome to School's Cool ${newUser.firstName} ${newUser.lastName}, <br>
                  <br> Please login to use the web application. <br><br> Thank you.</p>`,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
