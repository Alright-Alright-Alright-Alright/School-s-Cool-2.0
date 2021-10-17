const Event = require("../models/Event-model");

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

module.exports = {
  createEventDb,
};
