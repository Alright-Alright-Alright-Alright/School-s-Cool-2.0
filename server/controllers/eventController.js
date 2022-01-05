const {
  getAllEventsService,
  createEventService,
  getEventService,
  updateEventService,
  joinEventService,
  leaveEventService,
  deleteEventService
} = require("../services/eventService");

const getAllEvents = async (req, res, next) => {
  try {
    const events = await getAllEventsService();
    return res.status(201).json(events);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const createNewEvent = async (req, res, next) => {
  const { title, dateStart, dateEnd, description, location, bannerImage } =
    req.body;
  const { _id } = req.user.userLogedIn;
  // Passing info to services
  try {
    const event = await createEventService(
      _id,
      title,
      dateStart,
      dateEnd,
      description,
      location,
      bannerImage
    );
    res.status(201).json(event);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const getEvent = async (req, res, next) => {
  const { eventId } = req.params;
  try {
    const singleEvent = await getEventService(eventId);
    return res.status(201).json(singleEvent);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const updateEvent = async (req, res, next) => {
  const { eventId } = req.params;
  const { title, dateStart, dateEnd, description, location, bannerImage } =
    req.body;
  try {
    await updateEventService(
      eventId,
      title,
      dateStart,
      dateEnd,
      description,
      location,
      bannerImage
    );
    return res.status(201).json({ message: "Event had been updated" });
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const joinEvent = async (req, res, next) => {
  const { eventId } = req.params;
  const { _id } = req.user.userLogedIn;
  try {
    await joinEventService(eventId, _id);
    return res.status(201).json({ message: "You joined the event" });
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const leaveEvent = async (req, res, next) => {
  const { eventId } = req.params;
  const { _id } = req.user.userLogedIn;
  try {
    await leaveEventService(eventId, _id);
    return res.status(201).json({ message: "You left the event" });
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const deleteEvent = async (req, res, next) => {
  const { eventId } = req.params;
  try {
    await deleteEventService(eventId);
    return res.status(201).json({ message: "Event has been deleted" });
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
