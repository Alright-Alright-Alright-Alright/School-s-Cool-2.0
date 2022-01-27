const User = require("../models/User-model");

exports.createNewUser = async (firstName, lastName, email, password) => {
  try {
    let foundUser = await User.findOne({ email });

    if (foundUser) {
      throw new Error(
        "This email is already exists. Please login, or change email."
      );
    } else {
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
      });

      newUser.save();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.forgetPasswordDb = async (email, forgetPasswordToken) => {
  try {
    const user = await User.findOne({ email }, { new: true });

    if (!user) {
      throw new Error({ message: "User dont exists with that email" });
    } else {
      user.resetToken = forgetPasswordToken;
      user.expireToken = Date.now() + 3600000;
      user.save();
      console.log(user);
      return user;
    }
  } catch (error) {
    throw new Error(error);
  }
};
