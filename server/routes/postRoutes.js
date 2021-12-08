const express = require("express");
const postRoutes = express.Router();

const {
  getAllPosts,
  getPostById,
  createPost,
  likePost,
  unlikePost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

postRoutes.get("/topics/:topicId/posts", getAllPosts);
postRoutes.post("/topics/:topicId/posts", createPost);
postRoutes.get("/posts/:postId", getPostById);
postRoutes.put("/posts/:postId/likepost", likePost);
postRoutes.put("/posts/:postId/unlikepost", unlikePost);

module.exports = postRoutes;
