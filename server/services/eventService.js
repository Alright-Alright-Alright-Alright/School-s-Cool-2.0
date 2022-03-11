const {
  getAllEventsDb,
  createEventDb,
  getEventDb,
  updateEventDb,
  userJoinEventDb,
  userLeaveEventDb,
} = require("../db/eventDb");

// getting info from controller
const getAllEventsService = async () => {
  try {
    return await getAllEventsDb();
  } catch (e) {
    throw new Error(e.message);
  }
};

const createEventService = async (
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
  // passing info to the DB
  try {
    return await createEventDb(
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
  } catch (e) {
    throw new Error(e.message);
  }
};

const getEventService = async (eventId) => {
  try {
    return await getEventDb(eventId);
  } catch (e) {
    throw new Error(e.message);
  }
};

const updateEventService = async (
  eventId,
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
    return await updateEventDb(
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
  } catch (e) {
    throw new Error(e.message);
  }
};

const joinEventService = async (eventId, _id) => {
  try {
    return await userJoinEventDb(eventId, _id);
  } catch (error) {
    throw new Error(error);
  }
};

const leaveEventService = async (eventId, _id) => {
  try {
    return await userLeaveEventDb(eventId, _id);
  } catch (error) {
    throw new Error(error);
  }
};

const deleteEventService = async (eventId) => {
  try {
    return await deleteEventFromDb(eventId);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllEventsService,
  createEventService,
  getEventService,
  updateEventService,
  joinEventService,
  leaveEventService,
  deleteEventService,
};
