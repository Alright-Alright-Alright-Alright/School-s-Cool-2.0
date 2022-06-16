const {
  getAllEventsDb,
  createEventDb,
  getEventDb,
  updateEventDb,
  userJoinEventDb,
  userLeaveEventDb,
  deleteEventFromDb,
  addUserToEventDb,
  takeOutUserFromEventDb,
} = require("../db/eventDb");
const { sendEmailService } = require("../services/emailServices");
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
  tags,
  isPrivate
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
      tags,
      isPrivate
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
  tags,
  isPrivate
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
      tags,
      isPrivate
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

const inviteForEventService = async (eventId, user) => {
  try {
    sendEmailService(
      user.email,
      "School's Cool Event Invitation",
      `<h4>Hello dear ${user.firstName}.</h4><br/>
        <h4>You were invited to a School's Cool Event, take a look <a href="${process.env.CORS_ALLOWED}/events/${eventId}">here</a></h4><br/>
        <h5>Best Regards, <br/>
        School's Cool</h5>`
    );
    return await addUserToEventDb(eventId, user._id);
  } catch (error) {
    throw new Error(error);
  }
};

const removeInviteFromEventService = async (eventId, user) => {
  try {
    return await takeOutUserFromEventDb(eventId, user._id);
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
  inviteForEventService,
  removeInviteFromEventService,
};
