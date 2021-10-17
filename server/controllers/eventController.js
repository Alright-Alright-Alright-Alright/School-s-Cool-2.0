const { eventService } = require("../services/eventService");

const { createEvent } = eventService;

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
    res.sendStatus(500) && next(error);
  }
};

module.exports = {
  createNewEvent,
};
