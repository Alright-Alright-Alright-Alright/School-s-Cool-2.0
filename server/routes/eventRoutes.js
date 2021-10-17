const express = require("express");
const eventRoutes = express.Router();

const { createNewEvent } = require('../controllers/eventController');

eventRoutes.post("/events", createNewEvent);

module.exports = eventRoutes;