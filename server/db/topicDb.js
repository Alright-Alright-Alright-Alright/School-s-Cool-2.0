const Topic = require("../models/Topic-model");

const getAllTopicsDb = async () => {
  try {
    return await Topic.find({new: true}).sort({ dateStart: "asc" }).populate("members");
  } catch (e) {
    throw new Error(e.message);
  }
};

const addTopicToDb = async (
  title,
  description,
  bannerImage,
  private,
  owner
) => {
  try {
    return await Topic.create({
      title,
      description,
      bannerImage,
      private,
      owner,
    });
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleTopicFromdb = async (topicId) => {
  try {
    return await Topic.findById(topicId)
      .populate("posts")
      .populate("owner", "firstName lastName imageUrl")
      .populate("members", "_id firstName lastName imageUrl");
  } catch (error) {
    throw new Error(error);
  }
};

const updateTopicDb = async (topicId, title, description) => {
  try {
    return await Topic.findByIdAndUpdate(topicId, { title, description }, {new: true});
  } catch (error) {
    throw new Error(error);
  }
};

const addUserToTopicDb = async (topicId, user) => {
  try {
    return await Topic.findByIdAndUpdate(topicId, {
      $push: { members: user },
    }, {new: true});
  } catch (error) {
    throw new Error(error);
  }
};

const takeOutUserFromTopicDb = async (topicId, user) => {
  try {
    return await Topic.findByIdAndUpdate(topicId, {
      $pull: { members: user },
    }, {new: true});
  } catch (error) {
    throw new Error(error);
  }
};

const deleteTopicFromdb = async (topicId) => {
  try {
    return await Topic.findByIdAndDelete(topicId);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllTopicsDb,
  addTopicToDb,
  getSingleTopicFromdb,
  addUserToTopicDb,
  updateTopicDb,
  takeOutUserFromTopicDb,
  deleteTopicFromdb,
};
