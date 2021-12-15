const {
  getAllActivitiesService
} = require("../services/activityService");

const getAllActivities = async (req, res, next) => {
  const userId = req.user.userLogedIn._id;
  try {
    const activities = await getAllActivitiesService(userId);
    return res.status(201).json(activities);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

module.exports = {
  getAllActivities
};
