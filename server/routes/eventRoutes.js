const express = require("express");
const eventRoutes = express.Router();

const { getAllEvents, createNewEvent, getSingleEvent } = require('../controllers/eventController');

eventRoutes.get("/events", getAllEvents)
eventRoutes.post("/events", createNewEvent);
eventRoutes.get("/events/:eventId", getSingleEvent)

module.exports = eventRoutes;