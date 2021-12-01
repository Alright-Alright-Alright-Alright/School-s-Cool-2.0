const Post = require("../models/Post-model");
const Topic = require("../models/Topic-model");

const getAllPostsDb = async (topicId) => {
  try {
    return await Post.find({ topic: topicId })
      .sort({ createdAt: "desc" })
      .populate("owner", "firstName lastName imageUrl")
      .populate("topic", "title");
  } catch (e) {
    throw new Error(e.message);
  }
};

const addPostToDb = async (body, owner, topicId) => {
  let newPost = await Post.create({ body, owner });
  try {
    let updatedTopic = await Topic.findByIdAndUpdate(
      topicId,
      {
        $push: { posts: newPost },
      },
      { new: true }
    );
    // console.log(updatedTopic)

    // (owner, {
    //   $push: { fileUrl: file._id },
    // });
    // return await Post.create({ body: body, owner, topic:topicId}, { new: true })
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
            select: "firstName lastName imageUrl"
          }
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
