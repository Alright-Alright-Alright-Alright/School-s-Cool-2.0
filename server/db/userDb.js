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
  role,
  password,
) => {
  console.log(userid,
    firstName,
    lastName,
    email,
    imageUrl,
    role,
    password,
    )
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
    throw new Error(error.message)
  }
};

exports.followingTheUser = async (theUser, userToFollow) => {
  if (theUser !== userToFollow) {
    try {
      const user = await User.findById(userToFollow);
      const currentUser = await User.findById(theUser);
      if (!user.followers.includes(theUser)) {
        await user.updateOne({ $push: { followers: theUser } });
        await currentUser.updateOne({ $push: { followings: userToFollow } });
        throw new Error("user has been followed");
      } else {
        throw new Error("you allready follow this user");
      }
    } catch (err) {
      throw new Error(err);
    }
  } else {
    throw new Error("you cant follow yourself");
  }
}

exports.deletingTheUser = async (userid) => {
  try {
    return await User.findByIdAndDelete(userid)
  } catch (error) {
    throw new Error(error.message)
  }  
}

exports.getingAllTheUsers = async () => {
  try {
    return await User.find({}, "firstName lastName imageUrl role email");
  } catch (error) {
    throw new Error(error.message)
  }
}