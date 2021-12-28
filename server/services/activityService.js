const {
    getAllActivitiesDb,
    getFollowedActivitiesDb,
  } = require("../db/activityDb");
  
const getAllActivitiesService = async (userId) => {
    try {
      return await getAllActivitiesDb(userId);
    } catch (e) {
      throw new Error(e.message);
    }
  };

const getFollowedActivitiesService = async (userId) => {
  try {
    return await getFollowedActivitiesDb(userId);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
    getAllActivitiesService,
    getFollowedActivitiesService
};