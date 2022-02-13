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
  removeInviteForTopic,
  deleteTopic,
  editTopic,
} = require("../controllers/topicControllers");

topicRoutes.get("/topics", getAllTopics);
topicRoutes.post("/topics", createNewTopic);
topicRoutes.patch("/topics/:topicId", editTopic);
topicRoutes.get("/topics/:topicId", getTopic);
topicRoutes.put("/topics/:topicId", updateTopic);
topicRoutes.put("/topics/:topicId/join", joinTopic);
topicRoutes.put("/topics/:topicId/leave", leaveTopic);
topicRoutes.put("/topics/:topicId/invite", inviteForTopic);
topicRoutes.put("/topics/:topicId/removeInvite", removeInviteForTopic);
topicRoutes.delete("/topics/:topicId", deleteTopic);

module.exports = topicRoutes;
