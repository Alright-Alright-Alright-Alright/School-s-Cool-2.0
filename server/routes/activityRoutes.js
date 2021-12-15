const express = require("express");
const activityRoutes = express.Router();

const {
  getAllActivities
} = require("../controllers/activityController");

activityRoutes.get("/activities", getAllActivities);

module.exports = activityRoutes;
