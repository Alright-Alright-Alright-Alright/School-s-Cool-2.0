const express = require("express");
const eventRoutes = express.Router();

const { getAllEvents, createNewEvent } = require('../controllers/eventController');

eventRoutes.get("/events", getAllEvents)

eventRoutes.post("/events", createNewEvent);

module.exports = eventRoutes;