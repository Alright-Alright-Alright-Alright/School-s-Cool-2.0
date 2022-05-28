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
  tags,
  isPrivate
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
      tags,
      isPrivate,
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
  timeStart,
  description,
  location,
  bannerImage,
  tags,
  isPrivate
) => {
  try {
    return await Event.findByIdAndUpdate(
      eventId,
      {
        title,
        dateStart,
        dateEnd,
        timeStart,
        description,
        location,
        bannerImage,
        tags,
        isPrivate,
      },
      { new: true }
    )
      .populate("attendees")
      .populate("owner", "firstName lastName imageUrl");
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
    return await Event.findById(eventId).deleteOne();
  } catch (error) {
    throw new Error(error);
  }
};

const addUserToEventDb = async (eventId, user) => {
  try {
    return await Event.findByIdAndUpdate(
      eventId,
      {
        $push: { attendees: user },
      },
      { new: true }
    )
      .populate("owner", "firstName lastName imageUrl")
      .populate("attendees", "_id firstName lastName imageUrl")
      .populate({
        path: "posts",
        populate: {
          path: "owner",
          select: "firstName, lastName, imageUrl",
        },
        populate: {
          path: "comments",
          populate: {
            path: "owner",
            select: "firstName, lastName, imageUrl",
          },
        },
      });
  } catch (error) {
    throw new Error(error);
  }
};

const takeOutUserFromEventDb = async (eventId, user) => {
  try {
    return await Event.findByIdAndUpdate(
      eventId,
      {
        $pull: { attendees: user },
      },
      { new: true }
    )
      .populate("owner", "firstName lastName imageUrl")
      .populate("attendees", "_id firstName lastName imageUrl")
      .populate({
        path: "posts",
        populate: {
          path: "owner",
          select: "firstName, lastName, imageUrl",
        },
        populate: {
          path: "comments",
          populate: {
            path: "owner",
            select: "firstName, lastName, imageUrl",
          },
        },
      });
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
  addUserToEventDb,
  takeOutUserFromEventDb,
};
