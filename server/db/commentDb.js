const Comment = require("../models/Comment-model");
const Post = require("../models/Post-model");
const File = require("../models/File-model");

const getAllCommentsDb = async (id) => {
  try {
    let post = await Post.findById(id)
      .sort({ createdAt: "desc" })
      .populate("Comment");

    let file = File.findById(id)
      .sort({ createdAt: "desc" })
      .populate({
        path: "comments",
        populate: {
          path: "owner",
          select: "firstName lastName imageUrl",
        },
      })
      .populate("owner");

    return post ? post : file;
  } catch (e) {
    throw new Error(e.message);
  }
};

const addCommentToDb = async (owner, body, id) => {
  let newComment = await Comment.create({ body, owner, post: id });
  try {
    let updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        $push: { comments: newComment },
      },
      { new: true }
    )
      .populate("owner", "firstName lastName imageUrl")
      .populate("topic")
      .populate("event")
      .populate({
        path: "comments",
        populate: {
          path: "owner",
          select: "firstName lastName imageUrl",
        },
      });

    let updatedFile = await File.findByIdAndUpdate(
      id,
      {
        $push: { comments: newComment },
      },
      { new: true }
    )
      .populate("owner", "firstName lastName imageUrl")
      .populate({
        path: "comments",
        populate: {
          path: "owner",
          select: "firstName lastName imageUrl",
        },
      });

    return updatedPost ? updatedPost : updatedFile;
  } catch (error) {
    throw new Error(error);
  }
};

const getCommentByIdDb = async (commentId) => {
  try {
    return await Comment.findById(commentId).populate(
      "owner",
      "firstName lastName imageUrl"
    );
  } catch (error) {
    throw new Error(error);
  }
};

const deletingCommentFromDb = async (commentId, id) => {
  try {
    await Comment.findByIdAndDelete(commentId)
    let post = await Post.findByIdAndUpdate(
      id,
      {
        $pull: { comments: commentId },
      },
      { new: true }
    )
      .populate("owner", "firstName lastName imageUrl")
      .populate("topic")
      .populate("event")
      .populate({
        path: "comments",
        populate: {
          path: "owner",
          select: "firstName lastName imageUrl",
        },
      });

    let file = await File.findByIdAndUpdate(
      id,
      {
        $pull: { comments: commentId },
      },
      { new: true }
    )
      .populate("owner", "firstName lastName imageUrl")
      .populate({
        path: "comments",
        populate: {
          path: "owner",
          select: "firstName lastName imageUrl",
        },
      });

    return post ? post : file;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllCommentsDb,
  addCommentToDb,
  getCommentByIdDb,
  deletingCommentFromDb
};
