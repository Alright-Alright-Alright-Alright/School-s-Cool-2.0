const { createEvent } = require("../services/eventService");

// geting info from FE
const createNewEvent = async (req, res, next) => {
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
