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
  

topicRoutes.get("/topics", getAllTopics);
topicRoutes.post("/topics", createNewTopic);
topicRoutes.get("/topics/:topicId", getTopic);
topicRoutes.put("/topics/:topicId", updateTopic);
topicRoutes.put("/topics/:topicId/join", joinTopic);
topicRoutes.put("/topics/:topicId/leave", leaveTopic);
topicRoutes.put("/topics/:topicId/invite", inviteForTopic);
topicRoutes.delete("/topics/:topicId", deleteTopic);

module.exports = topicRoutes;

