const User = require("../models/User-model");

exports.createNewUser = async (firstName, lastName, email, password) => {
  try {
    let foundUser = await User.findOne({ email });

    if (foundUser) {
      throw new Error("This email is already exists. Please login, or change email.");
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
      throw new Error(error.message)
  }
};
