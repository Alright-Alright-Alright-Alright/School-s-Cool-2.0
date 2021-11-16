const Topic = require("../models/Topic-model");

const getAllTopicsDb = async () => {
  try {
    return await Topic.find()
      .sort({ dateStart: "asc" })
  } catch (e) {
    throw new Error(e.message);
  }
};

const addTopicToDB = async (title, description, author) => {
  try {
    return await Topic.create({title, description, author})
  } catch (error) {
    throw new Error(error)
  }
};

module.exports = {
    getAllTopicsDb,
    addTopicToDB
  };