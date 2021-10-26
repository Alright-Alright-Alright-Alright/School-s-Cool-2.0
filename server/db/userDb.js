const User = require("../models/User-model");

exports.getingTheUser = async (userid) => {
  try {
    return await User.findById(userid);
  } catch (error) {  
    throw new Error(error.message);
  }
}

exports.updatingTheUser = async (
  userid,
  firstName,
  lastName,
  email,
  imageUrl,
  password
) => {
  try {
    return await User.findByIdAndUpdate(
      userid,
      {
        firstName,
        lastName,
        email,
        imageUrl,
        password,
      },
      { new: true }
    );
  } catch (error) {
    throw new Error(error.message)
  }
};

exports.deletingTheUser = async (userid) => {
  try {
    return await User.findByIdAndDelete(userid)
  } catch (error) {
    throw new Error(error.message)
  }  
}