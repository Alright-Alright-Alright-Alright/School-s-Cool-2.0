const User = require("../models/User-model");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const { transporter } = require("../configs/nodemailer");

exports.newUser = (firstName, lastName, email, password) => {
  return new Promise((resolve, reject) => {
    User.findOne({ email })
      .then((response) => {
        if (response) {
          reject("This email is already taken");
        } else {
          const salt = bcrypt.genSaltSync(10);
          const hashPass = bcrypt.hashSync(password, salt);

          const newUser = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashPass,
          });

          newUser.save();

          transporter.sendMail({
            to: newUser.email,
            from: process.env.SCHOOLSCOOL_EMAIL,
            subject: "Succefull register!",
            html: `<p>Welcome to School's Cool ${newUser.firstName} ${newUser.lastName}, <br>
                  <br> Please login to use the web application. <br><br> Thank you.</p>`,
          });

          resolve("signup success! please login.");
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  });
};
