const Post = require("../models/Post-model");
const Topic = require("../models/Topic-model");

const getAllActivitiesDb = async (userId) => {
  try {
    return await Post.find()
      .sort({ createdAt: "desc" })
      .populate('topic', "title bannerImage")
      .populate("owner", "firstName lastName imageUrl")
      .populate({
        path: "comments",
        populate: {
          path: "owner",
          select: "firstName lastName imageUrl",
        },
      })
  } catch (e) {
    throw new Error(e.message);
  }
};

const getFollowedActivitiesDb = async (userId) => {
  try {
    const activities = await Post.find()
      .sort({ createdAt: "desc" })
      .populate('topic', "title bannerImage members")
      .populate("owner", "firstName lastName imageUrl followers")
      .populate({
        path: "comments",
        populate: {
          path: "owner",
          select: "firstName lastName imageUrl",
        },
      })
    return activities.filter(activity => activity.topic?.members.includes(userId) || activity.owner?.followers.includes(userId))
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  getAllActivitiesDb,
  getFollowedActivitiesDb
};
