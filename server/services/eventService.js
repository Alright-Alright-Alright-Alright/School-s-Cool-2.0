const { createEventDb } = require("../db/eventDb");

// getting info from controller
const createEvent = async (
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
  createEvent,
};
