const {
    getAllTopicsDb,
  } = require("../db/topicDb");
  
const getAllTopicsService = async () => {
    try {
      return await getAllTopicsDb();
    } catch (e) {
      throw new Error(e.message);
    }
  };

module.exports = {
    getAllTopicsService,
};