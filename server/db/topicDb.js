const Topic = require("../models/Topic-model");

const getAllTopicsDb = async () => {
  try {
    return await Topic.find().sort({ dateStart: "asc" }).populate("members");
  } catch (e) {
    throw new Error(e.message);
  }
};

const addTopicToDb = async (
  title,
  description,
  category,
  subject,
  bannerImage,
  isPrivate,
  owner
) => {
  try {
    return await Topic.create({
      title,
      description,
      category,
      subject,
      bannerImage,
      isPrivate,
      owner,
    });
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleTopicFromdb = async (topicId) => {
  try {
    return await Topic.findById(topicId)
      .populate("owner", "firstName lastName imageUrl")
      .populate("members", "_id firstName lastName imageUrl")
      .populate({
        path: "posts",
        populate: {
          path: "owner",
          select: "firstName, lastName, imageUrl",
        },
        populate: {
          path: "comments",
          populate: {
            path: "owner",
            select: "firstName, lastName, imageUrl",
          },
        },
      })
      .populate("resources");
  } catch (error) {
    throw new Error(error);
  }
};

const updateTopicDb = async (topicId, title, description) => {
  try {
    return await Topic.findByIdAndUpdate(
      topicId,
      { title, description },
      { new: true }
    );
  } catch (error) {
    throw new Error(error);
  }
};

const addUserToTopicDb = async (topicId, user) => {
  try {
    return await Topic.findByIdAndUpdate(
      topicId,
      {
        $push: { members: user },
      },
      { new: true }
    )
      .populate("owner", "firstName lastName imageUrl")
      .populate("members", "_id firstName lastName imageUrl")
      .populate({
        path: "posts",
        populate: {
          path: "owner",
          select: "firstName, lastName, imageUrl",
        },
        populate: {
          path: "comments",
          populate: {
            path: "owner",
            select: "firstName, lastName, imageUrl",
          },
        },
      })
      .populate("resources");
  } catch (error) {
    throw new Error(error);
  }
};

const takeOutUserFromTopicDb = async (topicId, user) => {
  try {
    return await Topic.findByIdAndUpdate(
      topicId,
      {
        $pull: { members: user },
      },
      { new: true }
    )
      .populate("owner", "firstName lastName imageUrl")
      .populate("members", "_id firstName lastName imageUrl")
      .populate({
        path: "posts",
        populate: {
          path: "owner",
          select: "firstName, lastName, imageUrl",
        },
        populate: {
          path: "comments",
          populate: {
            path: "owner",
            select: "firstName, lastName, imageUrl",
          },
        },
      })
      .populate("resources");
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

const editTopicDb = async (
  topicId,
  title,
  description,
  category,
  subject,
  bannerImage,
  isPrivate
) => {
  try {
    return await Topic.findByIdAndUpdate(topicId, {
      title,
      description,
      category,
      subject,
      bannerImage,
      isPrivate,
    });
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
  editTopicDb,
};
