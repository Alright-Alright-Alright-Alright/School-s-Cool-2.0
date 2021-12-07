const {
  getAllPostsService,
  createPostService,
  getPostsByTopicIdService,
  getPostByIdService,
  likePostService,
  unlikePostService,
} = require("../services/postService");

const getAllPosts = async (req, res, next) => {
  const { topicId } = req.params;
  try {
    const posts = await getAllPostsService(topicId);
    return res.status(201).json({ message: "Success", posts });
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const createPost = async (req, res, next) => {
  const { body, owner, topicId } = req.body;
  // const { _id } = req.user.userLogedIn;
  // console.log(_id)
  try {
    const post = await createPostService(body, owner, topicId);
    return res.status(201).json({ message: "Success", post });
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const getPostsByTopicId = async (req, res, next) => {
  const { topicId } = req.params;
  try {
    const posts = await getPostsByTopicIdService(topicId);
    return res.status(201).json({ message: "Success", posts });
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const post = await getPostByIdService(req.params.postId);
    return res.status(201).json({ message: "Success", post });
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const likePost = async (req, res, next) => {
  const { userId } = req.body;
  const { postId } = req.params;

  try {
    const post = await likePostService(postId, userId);
    return res.status(201).json({ post });
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const unlikePost = async (req, res, next) => {
  const { userId } = req.body;
  const { postId } = req.params;

  try {
    const post = await unlikePostService(postId, userId);
    return res.status(201).json({ post });
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  getPostsByTopicId,
  likePost,
  unlikePost,
  // updatePost, deletePost
};
