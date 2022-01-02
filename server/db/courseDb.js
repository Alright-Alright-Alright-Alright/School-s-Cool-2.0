const User = require("../models/User-model");

const addUserToCourseDb = async (courseId, user) => {
  try {
    let updatedUser = await User.findByIdAndUpdate(user);
    if (updatedUser.courses.includes(courseId)) {
      return { message: "You already joined this course" };
    } else {
      updatedUser.courses.push(courseId);
    }
    await updatedUser.save();
    return updatedUser;
  } catch (error) {
    throw new Error(error);
  }
};

const takeOutUserFromCourseDb = async (courseId, user) => {
  try {
    let updatedUser = await User.findByIdAndUpdate(user);
    if (updatedUser.courses.includes(courseId)) {
      updatedUser.courses.pull(courseId);
    }
    await updatedUser.save();
    return updatedUser;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  addUserToCourseDb,
  takeOutUserFromCourseDb,
};
