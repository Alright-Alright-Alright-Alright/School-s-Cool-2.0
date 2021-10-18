const Event = require("../models/Event-model");

const getAllEventsDb = async () => {
    console.log("Hello3")
  try {
    const events = await Event.find({}).sort({ dateStart: "asc" }).populate("attendees").exec()
    console.log(events);
    return events

    // return await Event.find({})
    //   .sort({ dateStart: "asc" })
    //   .populate("attendees");
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

module.exports = {
  getAllEventsDb,
  createEventDb,
};
