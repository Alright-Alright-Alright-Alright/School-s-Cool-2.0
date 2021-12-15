const {
    getAllActivitiesDb
  } = require("../db/activityDb");
  
const getAllActivitiesService = async (userId) => {
    try {
      return await getAllActivitiesDb(userId);
    } catch (e) {
      throw new Error(e.message);
    }
  };

module.exports = {
    getAllActivitiesService
};