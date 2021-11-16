const {
    getAllTopicsDb,
    addTopicToDB
  } = require("../db/topicDb");
  
const getAllTopicsService = async () => {
    try {
      return await getAllTopicsDb();
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const createNewTopicService = async (title, description, author) => {
    try {
      return await addTopicToDB(title, description, author)
    } catch (error) {
      throw new Error(error)
    }
  }

module.exports = {
    getAllTopicsService,
    createNewTopicService
};