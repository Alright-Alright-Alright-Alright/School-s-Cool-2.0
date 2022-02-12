const { isEmpty } = require("../middleware/authMiddlewareValidators");
const {
  getAllTopicsService,
  createNewTopicService,
  getTopicService,
  joinTopicService,
  updateTopicService,
  leaveTopicService,
  inviteForTopicService,
  removeInviteForTopicService,
  deleteTopicService,
  editTopicService
} = require("../services/topicService");

const getAllTopics = async (req, res, next) => {
  try {
    const topics = await getAllTopicsService();
    return res.status(201).json(topics);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const createNewTopic = async (req, res, next) => {
  const { title, description, category, subject, bannerImage, isPrivate } =
    req.body;
  const owner = req.user.userLogedIn._id;

  try {
    if (isEmpty(category)) {
      throw new Error("Please choose a category");
    } else if (isEmpty(subject)) {
      throw new Error("Please choose a subject");
    } else if (isEmpty(description)) {
      throw new Error("Please write a brief description of your topic");
    } else {
      const topic = await createNewTopicService(
        title,
        description,
        category,
        subject,
        bannerImage,
        isPrivate,
        owner
      );
      return res.status(201).json(topic);
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getTopic = async (req, res, next) => {
  try {
    const topic = await getTopicService(req.params.topicId);
    return res.status(201).json(topic);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const updateTopic = async (req, res, next) => {
  const topicId = req.params.topicId;
  const { title, description } = req.body;
  try {
    await updateTopicService(topicId, title, description);
    return res.status(201).json({ message: "Your topic has been updated" });
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const joinTopic = async (req, res, next) => {
  const user = req.user.userLogedIn._id;
  const topicId = req.params.topicId;
  try {
    let topic = await joinTopicService(topicId, user);
    return res
      .status(201)
      .json({ message: "You have joined the topic", topic });
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const leaveTopic = async (req, res, next) => {
  const user = req.user.userLogedIn._id;
  const topicId = req.params.topicId;
  try {
    let topic = await leaveTopicService(topicId, user);
    return res
      .status(201)
      .json({ message: "You have leaved the topic", topic });
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const inviteForTopic = async (req, res, next) => {
  const { userId } = req.body;
  const topicId = req.params.topicId;

  try {
    const topic = await inviteForTopicService(topicId, userId);
    return res.status(201).json(topic);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const removeInviteForTopic = async (req, res, next) => {
  const { userId } = req.body;
  const topicId = req.params.topicId;

  try {
    const topic = await removeInviteForTopicService(topicId, userId);
    return res.status(201).json(topic);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const deleteTopic = async (req, res, next) => {
  const topicId = req.params.topicId;
  try {
    const topic = await deleteTopicService(topicId);
    return res.status(201).json({ message: "The topic has been deleted" });
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const editTopic = async (req, res) => {
  const { title, description, category, subject, bannerImage, isPrivate } =
    req.body;
  const { topicId } = req.params;
  try {
    await editTopicService(
      topicId,
      title,
      description,
      category,
      subject,
      bannerImage,
      isPrivate
    );
    return res.status(201).json({ message: "The topic has been edited" });
  } catch (error) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getAllTopics,
  createNewTopic,
  getTopic,
  updateTopic,
  joinTopic,
  leaveTopic,
  inviteForTopic,
  removeInviteForTopic,
  deleteTopic,
  editTopic,
};
