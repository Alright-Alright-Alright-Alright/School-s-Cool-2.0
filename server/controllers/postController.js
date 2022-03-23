const {
  getAllPostsService,
  createPostService,
  getPostsByTopicIdService,
  getPostByIdService,
  likePostService,
  unlikePostService,
  deletePostService,
  updatePostService,
} = require("../services/postService");

const getAllPosts = async (req, res, next) => {
  const { topicId, eventId } = req.params;
  try {
    const posts = await getAllPostsService(topicId, eventId);
    return res.status(201).json(posts);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const createPost = async (req, res, next) => {
  const { body, topicId, eventId } = req.body;
  const owner = req.user.userLogedIn;
  try {
    const newPost = await createPostService(body, owner, topicId, eventId);
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

const updatePost = async (req, res, next) => {
  const { postId } = req.params;
  const { body } = req.body;
  try {
    const updatedPost = await updatePostService(postId, body);
    return res.status(201).json(updatedPost);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const likePost = async (req, res, next) => {
  const userId = req.user.userLogedIn;
  const { postId } = req.params;

  try {
    const post = await likePostService(postId, userId);
    return res.status(201).json(post);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const unlikePost = async (req, res, next) => {
  const userId = req.user.userLogedIn;
  const { postId } = req.params;
  try {
    const post = await unlikePostService(postId, userId);
    return res.status(201).json(post);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const deletePost = async (req, res, next) => {
  const { postId, parentId } = req.body;
  try {
    await deletePostService(postId, parentId);
    return res.status(200).json({ message: "Post has been deleted" });
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
  deletePost,
  updatePost,
};
