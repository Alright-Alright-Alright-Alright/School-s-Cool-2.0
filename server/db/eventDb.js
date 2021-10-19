const Event = require("../models/Event-model");

const getAllEventsDb = async () => {
  try {
    return await Event.find({})
      .sort({ dateStart: "asc" })
      .populate("attendees");
  } catch (e) {
    throw new Error(e.message);
  }
};

const createEventDb = async (
  _id,
  eventName,
  eventDateStart,
  eventDateEnd,
  eventDescription,
  eventLocation,
  eventBannerImage
) => {
  try {
    return await Event.create({
      owner: _id,
      eventName,
      eventDateStart,
      eventDateEnd,
      eventLocation,
      eventDescription,
      eventBannerImage,
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

const getEventDb = async (eventId) => {
  try {
    return await Event.find({ _id: eventId }).populate("attendees", "firstName");
  } catch (e) {
    throw new Error(e.message);
  }
};

const updateEventDb = async (eventId, data) => {
  try {
    return await Event.findByIdAndUpdate(eventId, data, { new: true });
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  getAllEventsDb,
  createEventDb,
  getEventDb,
  updateEventDb,
};
