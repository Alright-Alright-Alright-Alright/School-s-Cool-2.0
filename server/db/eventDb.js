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
  title,
  dateStart,
  dateEnd,
  timeStart,
  description,
  location,
  bannerImage,
  tags
) => {
  try {
    return await Event.create({
      owner: _id,
      title,
      dateStart,
      dateEnd,
      timeStart,
      description,
      location,
      bannerImage,
      tags
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

const getEventDb = async (eventId) => {
  try {
    return await Event.find({ _id: eventId })
      .populate("attendees")
      .populate("owner", "firstName lastName imageUrl");
  } catch (e) {
    throw new Error(e.message);
  }
};

const updateEventDb = async (
  eventId,
  title,
  dateStart,
  dateEnd,
  description,
  location,
  bannerImage
) => {
  try {
    return await Event.findByIdAndUpdate(
      eventId,
      { title, dateStart, dateEnd, description, location, bannerImage },
      { new: true }
    );
  } catch (e) {
    throw new Error(e.message);
  }
};

const userJoinEventDb = async (eventId, _id) => {
  try {
    return await Event.findByIdAndUpdate(eventId, {
      $push: { attendees: _id },
    }).populate("owner", "firstName lastName imageUrl");
  } catch (error) {
    throw new Error(error);
  }
};

const userLeaveEventDb = async (eventId, _id) => {
  try {
    return await Event.findByIdAndUpdate(eventId, {
      $pull: { attendees: _id },
    }).populate("owner", "firstName lastName imageUrl");
  } catch (error) {
    throw new Error(error);
  }
};

const deleteEventFromDb = async (eventId) => {
  try {
    return await Event.findByIdAndDelete(eventId);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllEventsDb,
  createEventDb,
  getEventDb,
  updateEventDb,
  userJoinEventDb,
  userLeaveEventDb,
  deleteEventFromDb,
};
