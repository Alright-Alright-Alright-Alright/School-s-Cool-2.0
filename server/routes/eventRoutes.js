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

eventRoutes.get("/events",jwtAuthorization, getAllEvents);
eventRoutes.post("/events",jwtAuthorization, createNewEvent);
eventRoutes.get("/events/:eventId",jwtAuthorization, getEvent);
eventRoutes.put("/events/:eventId",jwtAuthorization, updateEvent);
eventRoutes.put("/events/:eventId/join",jwtAuthorization, joinEvent);
eventRoutes.put("/events/:eventId/leave",jwtAuthorization, leaveEvent);
eventRoutes.delete("/events/:eventId",jwtAuthorization, deleteEvent);

module.exports = eventRoutes;
