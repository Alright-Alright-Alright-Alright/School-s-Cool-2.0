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
  inviteForEvent,
  removeInviteFromEvent
} = require("../controllers/eventController");

eventRoutes.get("/events", getAllEvents);
eventRoutes.post("/events", createNewEvent);
eventRoutes.get("/events/:eventId", getEvent);
eventRoutes.put("/events/:eventId", updateEvent);
eventRoutes.put("/events/:eventId/join", joinEvent);
eventRoutes.put("/events/:eventId/leave", leaveEvent);
eventRoutes.put("/events/:eventId/invite", inviteForEvent);
eventRoutes.put("/events/:eventId/removeInvite", removeInviteFromEvent);
eventRoutes.delete("/events/:eventId", deleteEvent);


module.exports = eventRoutes;
