const {
  getAllEventsService,
  createEventService,
  getEventService,
  updateEventService
} = require("../services/eventService");

const { sendEventInviteEmailService } = require("../services/emailServices");
// geting info from FE

const getAllEvents = async (req, res, next) => {
  try {
    const events = await getAllEventsService();
    return res.status(201).json(events);
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

const getEvent = async (req, res, next) => {
  const { eventId } = req.params;
  const { userEmail } = req.body;

  try {
    const singleEvent = await getEventService(eventId);
    await sendEventInviteEmailService(userEmail, singleEvent);
    return res.status(201).json(singleEvent);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const updateEvent = async (req, res, next) => {
  const { eventId } = req.params;

  try {
    const updatedEvent = await updateEventService(eventId, req.body);
    return res.status(201).json(updatedEvent);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const joinEvent = async (req, res, next) => {
  const { eventId } = req.params;

  try {
    await joinEventService(eventId);

    return res.status(201).json();
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const leaveEvent = async (req, res, next) => {
  const { eventId } = req.params;

  try {
    await leaveEventService(eventId);

    return res.status(201).json();
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const deleteEvent = async (req, res, next) => {
  const { eventId } = req.params;

  try {
    await deleteEventService(eventId);

    return res.status(201).json();
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

module.exports = {
  getAllEvents,
  createNewEvent,
  getEvent,
  updateEvent,
  joinEvent,
  leaveEvent,
  deleteEvent,
};
