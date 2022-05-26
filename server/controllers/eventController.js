const {
  getAllEventsService,
  createEventService,
  getEventService,
  updateEventService,
  joinEventService,
  leaveEventService,
  deleteEventService,
  inviteForEventService,
  removeInviteFromEventService
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
  const {
    title,
    dateStart,
    dateEnd,
    timeStart,
    description,
    location,
    bannerImage,
    tags,
  } = req.body;
  const _id  = req.user.userLogedIn;
  try {
    if (!title) {
      throw new Error("Please write a title for the Event");
    } else if (!location) {
      throw new Error("Please write a Event location");
    } else {
      const event = await createEventService(
        _id,
        title,
        dateStart,
        dateEnd,
        timeStart,
        description,
        location,
        bannerImage,
        tags
      );
      res.status(201).json(event);
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
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
  const {
    title,
    dateStart,
    dateEnd,
    timeStart,
    description,
    location,
    bannerImage,
    tags,
  } = req.body;
  try {
    const updatedEvent = await updateEventService(
      eventId,
      title,
      dateStart,
      dateEnd,
      timeStart,
      description,
      location,
      bannerImage,
      tags
    );
    return res.status(201).json(updatedEvent);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const joinEvent = async (req, res, next) => {
  const { eventId } = req.params;
  const _id = req.user.userLogedIn;
  try {
    let event = await joinEventService(eventId, _id);
    return res.status(201).json(event);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const leaveEvent = async (req, res, next) => {
  const { eventId } = req.params;
  const _id = req.user.userLogedIn;
  try {
    let event = await leaveEventService(eventId, _id);
    return res.status(201).json(event);
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

const inviteForEvent = async (req, res, next) => {
  const { userId } = req.body;
  const eventId = req.params.eventId;
  
  try {
    const event = await inviteForEventService(eventId, userId);
    return res.status(201).json(event);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const removeInviteFromEvent = async (req, res, next) => {
  const { userId } = req.body;
  const eventId = req.params.eventId;
  
  try {
    const event = await removeInviteFromEventService(eventId, userId);
    return res.status(201).json(event);
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
  inviteForEvent,
  removeInviteFromEvent
};
