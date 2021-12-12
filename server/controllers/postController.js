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
    return res.status(201).json(posts);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const createPost = async (req, res, next) => {
  const { body, topicId } = req.body;
  const owner = req.user.userLogedIn._id;

  // const { _id } = req.user.userLogedIn;
  console.log(owner)
  try {
    const newPost = await createPostService(body, owner, topicId);
    return res.status(201).json(newPost);
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
    const singlePost = await getPostByIdService(req.params.postId);
    return res.status(201).json(singlePost);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const likePost = async (req, res, next) => {
  // const { userId } = req.body;
  const userId = req.user.userLogedIn._id;
  const { postId } = req.params;

  try {
    const post = await likePostService(postId, userId);
    return res.status(201).json(post);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const unlikePost = async (req, res, next) => {
  const userId = req.user.userLogedIn._id;
  const { postId } = req.params;

  try {
    const post = await unlikePostService(postId, userId);
    return res.status(201).json(post);
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
