const Comment = require("../models/Comment-model");
const Post = require("../models/Post-model")

const getAllCommentsDb = async (postId) => {
  try {
    return await Post.find(postId)
      .sort({ createdAt: "desc" })
      .populate("Comment")
  } catch (e) {
    throw new Error(e.message);
  }
};

const addCommentToDb = async (owner, body, postId) => {
  let newComment = await Comment.create({ body, owner});
  try {
     let updatedPost = await Post.findByIdAndUpdate(postId, {
      $push: { comments: newComment }, 
    }, { new: true })
    return newComment
  } catch (error) {
    throw new Error(error)
  }
};

const getCommentByIdDb = async (commentId) => {
    try {
        return await Comment.findById(commentId).populate("owner", 'firstName lastName imageUrl')
    } catch (error) {
        throw new Error(error)
    }
};

module.exports = {
    getAllCommentsDb,
    addCommentToDb,
    getCommentByIdDb
  };