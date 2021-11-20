const express = require("express");
const topicRoutes = express.Router();

const {
  getAllTopics,
  createNewTopic,
  getTopic,
  updateTopic,
  joinTopic,
  leaveTopic,
  inviteForTopic,
  deleteTopic,
} = require("../controllers/topicControllers");
const { jwtAuthorization } = require("../middleware/JWTmiddleware");

topicRoutes.get("/topics", jwtAuthorization, getAllTopics);
topicRoutes.post("/topics", jwtAuthorization, createNewTopic);
topicRoutes.get("/topics/:topicId", jwtAuthorization, getTopic);
topicRoutes.put("/topics/:topicId", jwtAuthorization, updateTopic);
topicRoutes.put("/topics/:topicId/join", jwtAuthorization, joinTopic);
topicRoutes.put("/topics/:topicId/leave", jwtAuthorization, leaveTopic);
topicRoutes.put("/topics/:topicId/invite", jwtAuthorization, inviteForTopic);
topicRoutes.delete("/topics/:topicId", jwtAuthorization, deleteTopic);

module.exports = topicRoutes;
