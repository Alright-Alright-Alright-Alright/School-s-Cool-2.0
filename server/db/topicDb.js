const Topic = require("../models/Topic-model");

const getAllTopicsDb = async () => {
  try {
<<<<<<< HEAD
    return await Topic.find().sort({ dateStart: "asc" }).populate("members");
=======
    return await Topic.find({new: true}).sort({ dateStart: "asc" }).populate("members");
>>>>>>> db8269b3d355fdef1a7d1592a57cb40ef7a2df91
  } catch (e) {
    throw new Error(e.message);
  }
};

<<<<<<< HEAD
const addTopicToDb = async (title, description, owner) => {
  try {
    return await Topic.create({ title, description, owner });
=======
const addTopicToDb = async (title, description, bannerImage, private, owner) => {
  try {
    return await Topic.create({ title, description, bannerImage, private, owner });
>>>>>>> db8269b3d355fdef1a7d1592a57cb40ef7a2df91
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleTopicFromdb = async (topicId) => {
  try {
<<<<<<< HEAD
    return await Topic.findById(topicId);
=======
    return await Topic.findById(topicId, {new: true}).populate("posts").populate("owner", 'firstName lastName imageUrl')
    ;
>>>>>>> db8269b3d355fdef1a7d1592a57cb40ef7a2df91
  } catch (error) {
    throw new Error(error);
  }
};

const updateTopicDb = async (topicId, title, description) => {
  try {
<<<<<<< HEAD
    return await Topic.findByIdAndUpdate(topicId, { title, description });
=======
    return await Topic.findByIdAndUpdate(topicId, { title, description }, {new: true});
>>>>>>> db8269b3d355fdef1a7d1592a57cb40ef7a2df91
  } catch (error) {
    throw new Error(error);
  }
};

const addUserToTopicDb = async (topicId, user) => {
  try {
    return await Topic.findByIdAndUpdate(topicId, {
      $push: { members: user },
<<<<<<< HEAD
    });
=======
    }, {new: true});
>>>>>>> db8269b3d355fdef1a7d1592a57cb40ef7a2df91
  } catch (error) {
    throw new Error(error);
  }
};

const takeOutUserFromTopicDb = async (topicId, user) => {
  try {
    return await Topic.findByIdAndUpdate(topicId, {
      $pull: { members: user },
<<<<<<< HEAD
    });
=======
    }, {new: true});
>>>>>>> db8269b3d355fdef1a7d1592a57cb40ef7a2df91
  } catch (error) {
    throw new Error(error);
  }
}

const deleteTopicFromdb = async (topicId) => {
  try {
    return await Topic.findByIdAndDelete(topicId)
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getAllTopicsDb,
  addTopicToDb,
  getSingleTopicFromdb,
  addUserToTopicDb,
  updateTopicDb,
  takeOutUserFromTopicDb,
  deleteTopicFromdb
};
