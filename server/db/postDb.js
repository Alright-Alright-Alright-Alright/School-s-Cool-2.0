const Post = require("../models/Post-model");
const Topic = require("../models/Topic-model");
const Event = require("../models/Event-model");
const Comment = require("../models/Comment-model");

const getAllPostsDb = async (topicId, eventId) => {
  try {
    if (topicId) {
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
        });
    } else {
      return await Post.find({ event: eventId })
        .sort({ createdAt: "desc" })
        .populate("owner", "firstName lastName imageUrl")
        .populate("topic", "title")
        .populate({
          path: "comments",
          populate: {
            path: "owner",
            select: "firstName lastName imageUrl",
          },
        });
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

const addPostToDb = async (body, owner, topicId, eventId) => {
  console.log(owner);
  try {
    let newPost = await Post.create({
      body,
      owner,
      topic: topicId,
      event: eventId,
    }).then(async (postToPopulate) => {
      const result = await Post.findById(postToPopulate._id).populate("owner");
      return result;
    });
    topicId
      ? await Topic.findByIdAndUpdate(topicId, { $push: { posts: newPost } })
      : await Event.findByIdAndUpdate(eventId, { $push: { posts: newPost } });

    return newPost;
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

const likePostDb = async (postId, userId) => {
  try {
    let post = await Post.findById(postId)
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
    if (post.likedBy.includes(userId)) {
      return { message: "You already liked this post" };
    } else {
      post.likedBy.push(userId);
    }
    await post.save();
    return post;
  } catch (error) {
    throw new Error(error);
  }
};

const unlikePostDb = async (postId, userId) => {
  try {
    let post = await Post.findById(postId)
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
    if (post.likedBy.includes(userId)) {
      post.likedBy.pull(userId);
    }
    await post.save();
    return post;
  } catch (error) {
    throw new Error(error);
  }
};

const updatePostDb = async (postId, body) => {
  try {
    let post = await Post.findByIdAndUpdate(postId, { body }, { new: true })
      .populate("owner", "firstName lastName imageUrl")
      .populate("topic", "title")
      .populate({
        path: "comments",
        populate: {
          path: "owner",
          select: "firstName lastName imageUrl",
        },
      });
    return post;
  } catch (error) {
    throw new Error(error);
  }
};

const deletePostDb = async (postId, topicId) => {
  try {
    await Post.findById(postId).deleteOne();
    await Topic.findByIdAndUpdate(
      topicId,
      {
        $pull: { posts: postId },
      },
      { new: true }
    );
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllPostsDb,
  addPostToDb,
  getPostByIdDb,
  likePostDb,
  unlikePostDb,
  deletePostDb,
  updatePostDb,
};
