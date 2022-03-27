const User = require("../models/User-model");

exports.getingTheUser = async (userid) => {
  try {
    return await User.findByIdAndUpdate(
      userid,
      { lastLoginDate: Date.now() },
      { new: true }
    );

    // return await User.findById(userid);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updatingTheUser = async (
  userid,
  firstName,
  lastName,
  email,
  imageUrl,
  role,
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
        role,
        password,
      },
      { new: true }
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.followingTheUser = async (theUser, userToFollow) => {
  try {
    if (theUser !== userToFollow) {
      const user = await User.findById(userToFollow);
      if (user.followers.includes(theUser)) {
        throw new Error("you allready follow this user");
      } else {
        await user.updateOne({ $push: { followers: theUser } });
        const currentUserUpdated = await User.findByIdAndUpdate(
          theUser,
          { $push: { followings: userToFollow } },
          { new: true }
        );
        return currentUserUpdated;
      }
    } else {
      throw new Error("you cant follow yourself");
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.unfollowingTheUser = async (theUser, userToFollow) => {
  try {
    const user = await User.findById(userToFollow);
    await user.updateOne({ $pull: { followers: theUser } });
    const currentUserUpdated = await User.findByIdAndUpdate(
      theUser,
      { $pull: { followings: userToFollow } },
      { new: true }
    );
    return currentUserUpdated;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.deletingTheUser = async (userid) => {
  try {
    return await User.findByIdAndDelete(userid);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getingAllTheUsers = async () => {
  try {
    return await User.find({}, "firstName lastName imageUrl role email");
  } catch (error) {
    throw new Error(error.message);
  }
};
