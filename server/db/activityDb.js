const Post = require("../models/Post-model");
const Topic = require("../models/Topic-model");

const getAllActivitiesDb = async (userId) => {
  try {
    return await Post.find()
      .sort({ createdAt: "desc" })
      .populate({
        path: 'topic',
        match: {members: userId},
        select: "title bannerImage"
      })
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

module.exports = {
  getAllActivitiesDb,
};
