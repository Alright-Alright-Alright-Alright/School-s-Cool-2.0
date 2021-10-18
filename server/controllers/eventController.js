const { getAllEventsService, createEventService } = require("../services/eventService");

// geting info from FE

const getAllEvents = async (req, res, next) => {
    console.log("hello")
  try {
    await getAllEventsService();
    res.status(201);
    next();
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const createNewEvent = async (req, res, next) => {
  const {
    eventName,
    eventDateStart,
    eventDateEnd,
    eventDescription,
    eventLocation,
    eventBannerImage,
  } = req.body;
  const { _id } = req.user;
  // Passing info to services
  try {
    await createEventService(
      _id,
      eventName,
      eventDateStart,
      eventDateEnd,
      eventDescription,
      eventLocation,
      eventBannerImage
    );
    res.status(201);
    next();
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

module.exports = {
    getAllEvents,
  createNewEvent,
};
