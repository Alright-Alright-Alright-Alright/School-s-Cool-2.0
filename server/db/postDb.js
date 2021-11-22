const Post = require("../models/Post-model");

const getAllPostsDb = async (topicId) => {
  try {
    return await Post.find({topic: topicId})
      .sort({ createdAt: "desc" })
      .populate("owner", 'firstName lastName imageUrl')
      .populate("topic", 'title')
  } catch (e) {
    throw new Error(e.message);
  }
};

const addPostToDb = async (body, owner, topicId) => {
  try {
    return await Post.create({ body: body, owner, topic:topicId}, { new: true })
  } catch (error) {
    throw new Error(error)
  }
};

const getPostsByTopicIdDb = async (topicId) => {
    try {
        return await Post.find({topicId})
    } catch (error) {
        throw new Error(error)
    }
};

const getPostByIdDb = async (postId) => {
    try {
        return await Post.findById(postId)
    } catch (error) {
        throw new Error(error)
    }
};

module.exports = {
    getAllPostsDb,
    addPostToDb,
    getPostsByTopicIdDb,
    getPostByIdDb
  };