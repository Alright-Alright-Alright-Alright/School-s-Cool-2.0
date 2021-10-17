const { createEvent } = require("../services/eventService");

const createNewEvent = async (req, res, next) => {
  // geting info from FE
  const {
    eventName,
    eventDateStart,
    eventDateEnd,
    eventDescription,
    eventLocation,
    eventBannerImage,
  } = req.body;
  const { _id } = req.user;
// Passing info to services
  try {
    await createEvent(
      _id,
      eventName,
      eventDateStart,
      eventDateEnd,
      eventDescription,
      eventLocation,
      eventBannerImage
    );

    res.sendStatus(201);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

module.exports = {
  createNewEvent,
};
