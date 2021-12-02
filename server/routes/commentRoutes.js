const express = require("express");
const commentRoutes = express.Router();

const { getAllComments, getCommentById, createComment, updatecomment, deleteComment } = require("../controllers/commentController");

commentRoutes.get("/posts/:postId/comments", getAllComments);
commentRoutes.post("/posts/:postId/comments", createComment);
commentRoutes.get("/posts/:postId", getCommentById);

module.exports = commentRoutes;