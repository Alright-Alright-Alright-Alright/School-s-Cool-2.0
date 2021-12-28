const express = require("express");
const activityRoutes = express.Router();

const {
  getAllActivities,
  getFollowedActivities,
} = require("../controllers/activityController");

activityRoutes.get("/activities", getAllActivities);
activityRoutes.get("/followedActivities", getFollowedActivities);

module.exports = activityRoutes;
