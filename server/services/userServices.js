const {
  getingTheUser,
  updatingTheUser,
  followingTheUser,
  unfollowingTheUser,
  deletingTheUser,
  getingAllTheUsers,
} = require("../db/userDb");
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
  role,
  password,
) => {
  try {
    return await updatingTheUser(
      userid,
      firstName,
      lastName,
      email,
      imageUrl,
      role,
      password
    );
    // let newPassword = null;
    // let user = await getingTheUser(userid);
    // if (user.password !== password) {
    //   const salt = bcrypt.genSaltSync(10);
    //   newPassword = bcrypt.hashSync(password, salt);
    //   return await updatingTheUser(
    //     userid,
    //     firstName,
    //     lastName,
    //     email,
    //     imageUrl,
    //     newPassword
    //   );
    // } else {
    //   return await updatingTheUser(
    //     userid,
    //     firstName,
    //     lastName,
    //     email,
    //     imageUrl,
    //     password
    //   );
    // }
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.followTheUser = async (theUser, userToFollow) => {
  try {
    return await followingTheUser(theUser, userToFollow);
  } catch (error) {
    throw new Error(error);
  }
};

exports.unfollowTheUser = async (theUser, userToFollow) => {
  try {
    return await unfollowingTheUser(theUser, userToFollow);
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteTheUser = async (userid) => {
  try {
    return await deletingTheUser(userid);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getAllTheUsers = async () => {
  try {
    return await getingAllTheUsers();
  } catch (error) {
    throw new Error(error.message);
  }
};
