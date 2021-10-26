const { getingTheUser, updatingTheUser, deletingTheUser } = require("../db/userDb");
const bcrypt = require("bcryptjs");
exports.getTheUser = async (userid) => {
  try {
    return await getingTheUser(userid);
  } catch (error) {
    throw new Error(error.message);
  }
};

// review this function after frontend is done. 
exports.updateTheUser = async (
  userid,
  firstName,
  lastName,
  email,
  imageUrl,
  password
) => {
  try {
    let newPassword = null;
    let user = await getingTheUser(userid);
    if (user.password !== password) {
      const salt = bcrypt.genSaltSync(10);
      newPassword = bcrypt.hashSync(password, salt);
      return await updatingTheUser(
        userid,
        firstName,
        lastName,
        email,
        imageUrl,
        newPassword
      );
    } else {
      return await updatingTheUser(
        userid,
        firstName,
        lastName,
        email,
        imageUrl,
        password
      );
    }
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

exports.deleteTheUser = async (userid) => {
  try {
    return await deletingTheUser(userid)
  } catch (error) {
    throw new Error(error.message);
  }
}