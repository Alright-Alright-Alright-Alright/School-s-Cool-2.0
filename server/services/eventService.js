const { createEventDb } = require("../db/eventDb");

const createEvent = async (
  _id,
  eventName,
  eventDateStart,
  eventDateEnd,
  eventDescription,
  eventLocation,
  eventBannerImage
) => {
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
