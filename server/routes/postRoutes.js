const express = require("express");
const postRoutes = express.Router();

const { getAllPosts, getPostById, createPost, updatePost, deletePost } = require("../controllers/postController");

postRoutes.get("/topics/:topicId/posts", getAllPosts);
postRoutes.post("/topics/:topicId/posts", createPost);
postRoutes.get("/posts/:postId", getPostById);

module.exports = postRoutes;
