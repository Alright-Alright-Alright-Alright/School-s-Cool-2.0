const {
  getAllTopicsDb,
  addTopicToDb,
  getSingleTopicFromdb,
  addUserToTopicDb,
  updateTopicDb,
  takeOutUserFromTopicDb,
  deleteTopicFromdb,
} = require("../db/topicDb");

const getAllTopicsService = async () => {
  try {
    return await getAllTopicsDb();
  } catch (e) {
    throw new Error(e.message);
  }
};

const createNewTopicService = async (
  title,
  description,
  category,
  subject,
  bannerImage,
  isPrivate,
  owner
) => {
  try {
    return await addTopicToDb(
      title,
      description,
      category,
      subject,
      bannerImage,
      isPrivate,
      owner
    );
  } catch (error) {
    throw new Error(error);
  }
};

const getTopicService = async (topicId) => {
  try {
    return await getSingleTopicFromdb(topicId);
  } catch (error) {
    throw new Error(error);
  }
};

const updateTopicService = async (topicId, title, description) => {
  try {
    return await updateTopicDb(topicId, title, description);
  } catch (error) {
    throw new Error(error);
  }
};

const joinTopicService = async (topicId, user) => {
  try {
    return await addUserToTopicDb(topicId, user);
  } catch (error) {
    throw new Error(error);
  }
};

const leaveTopicService = async (topicId, user) => {
  try {
    return await takeOutUserFromTopicDb(topicId, user);
  } catch (error) {
    throw new Error(error);
  }
};

const inviteForTopicService = async (topicId, user) => {
  try {
    return await addUserToTopicDb(topicId, user);
  } catch (error) {
    throw new Error(error);
  }
};

const removeInviteForTopicService = async (topicId, user) => {
  try {
    return await takeOutUserFromTopicDb(topicId, user);
  } catch (error) {
    throw new Error(error);
  }
};

const deleteTopicService = async (topicId) => {
  try {
    return await deleteTopicFromdb(topicId);
  } catch (error) {
    throw new Error(error);
  }
};

const editTopicService = async (
  topicId,
  title,
  description,
  category,
  subject,
  bannerImage,
  isPrivate
) => {
  try {
    return await editTopicDb(
      topicId,
      title,
      description,
      category,
      subject,
      bannerImage,
      isPrivate
    );
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllTopicsService,
  createNewTopicService,
  getTopicService,
  joinTopicService,
  updateTopicService,
  leaveTopicService,
  inviteForTopicService,
  removeInviteForTopicService,
  deleteTopicService,
  editTopicService,
};
