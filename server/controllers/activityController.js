const {
  getAllActivitiesService,
  getFollowedActivitiesService
} = require("../services/activityService");

const getAllActivities = async (req, res, next) => {
  const userId = req.user.userLogedIn;
  try {
    const activities = await getAllActivitiesService(userId);
    return res.status(201).json(activities);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const getFollowedActivities = async (req, res, next) => {
  const userId = req.user.userLogedIn;
  try {
    const activities = await getFollowedActivitiesService(userId);
    return res.status(201).json(activities);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

module.exports = {
  getAllActivities,
  getFollowedActivities
};
