const express = require("express");
const commentRoutes = express.Router();

const { getAllComments, getCommentById, createComment, deleteComment } = require("../controllers/commentController");

commentRoutes.get("/posts/:postId/comments", getAllComments);
commentRoutes.get("/library/:fileId/comments", getAllComments);
commentRoutes.post("/posts/:postId/comments", createComment);
commentRoutes.post("/library/:fileId/comments", createComment);
commentRoutes.get("/posts/:postId", getCommentById);
commentRoutes.put("/deleteComment", deleteComment);

module.exports = commentRoutes;