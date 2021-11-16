const express = require("express");
const eventRoutes = express.Router();

const {
  getAllEvents,
  createNewEvent,
  getEvent,
  updateEvent,
  joinEvent,
  leaveEvent,
  deleteEvent,
} = require("../controllers/eventController");
const {jwtAuthorization} = require("../middleware/JWTmiddleware");

eventRoutes.get("/events", getAllEvents);
eventRoutes.post("/events", createNewEvent);
eventRoutes.get("/events/:eventId", getEvent);
eventRoutes.put("/events/:eventId", updateEvent);
eventRoutes.put("/events/:eventId/join", joinEvent);
eventRoutes.put("/events/:eventId/leave", leaveEvent);
eventRoutes.delete("/events/:eventId", deleteEvent);

module.exports = eventRoutes;
