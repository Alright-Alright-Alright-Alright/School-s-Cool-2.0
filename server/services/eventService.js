const { getAllEventsDb, createEventDb } = require("../db/eventDb");

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
  eventName,
  eventDateStart,
  eventDateEnd,
  eventDescription,
  eventLocation,
  eventBannerImage
) => {
  // passing info to the DB
  try {
    return await createEventDb(
      _id,
      eventName,
      eventDateStart,
      eventDateEnd,
      eventDescription,
      eventLocation,
      eventBannerImage
    );
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  getAllEventsService,
  createEventService,
};
