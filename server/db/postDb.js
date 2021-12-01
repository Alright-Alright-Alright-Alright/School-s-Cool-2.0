const Post = require("../models/Post-model");
const Topic = require("../models/Topic-model");

const getAllPostsDb = async (topicId) => {
  try {
    return await Post.find({ topic: topicId })
      .sort({ createdAt: "desc" })
      .populate("owner", "firstName lastName imageUrl")
      .populate("topic", "title")
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

const addPostToDb = async (body, owner, topicId) => {
  let newPost = await Post.create({ body, owner, topic: topicId });
  try {
    let updatedTopic = await Topic.findByIdAndUpdate(
      topicId,
      {
        $push: { posts: newPost },
      },
      { new: true }
    );
  } catch (error) {
    throw new Error(error);
  }
};

const getPostsByTopicIdDb = async (topicId) => {
  try {
    return await Post.find({ topicId });
  } catch (error) {
    throw new Error(error);
  }
};

const getPostByIdDb = async (postId) => {
  try {
    return await Post.findById(postId)
      .populate("owner", "firstName lastName imageUrl")
      .populate({
        path: "comments",
        populate: {
          path: "owner",
          select: "firstName lastName imageUrl",
        },
      });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllPostsDb,
  addPostToDb,
  getPostsByTopicIdDb,
  getPostByIdDb,
};
