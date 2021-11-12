const Topic = require("../models/Topic-model");

const getAllTopicsDb = async () => {
  try {
    return await Topic.find({})
      .sort({ dateStart: "asc" })
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
    getAllTopicsDb,
  };