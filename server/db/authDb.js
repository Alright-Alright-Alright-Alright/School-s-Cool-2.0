const User = require("../models/User-model");
const bcrypt = require("bcryptjs")

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

exports.loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User does not exists!")
    }
    if (user && await bcrypt.compare(password, user.password)) {
      return user
    } else {
      throw new Error("Invalid credentials.")
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

exports.forgetPasswordDb = async (email, forgetPasswordToken) => {
  try {
    const user = await User.findOne({ email }, { new: true });
    if (!user) {
      throw new Error("User dont exists with that email");
    } else {
      user.resetToken = forgetPasswordToken;
      user.expireToken = Date.now() + 3600000;
      user.save();
      return user;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.newPasswordDb = async (hashedpassword, token) => {
  try {
    const user = await User.findOne({
      resetToken: token,
      expireToken: { $gt: Date.now() },
    });
    if (!user) {
      throw new Error("Try again session expired");
    }
    user.password = hashedpassword;
    user.resetToken = undefined;
    user.expireToken = undefined;
    user.save();
  } catch (error) {
    throw new Error(error.message);
  }
};
