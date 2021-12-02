const {
  getAllTopicsService,
  createNewTopicService,
  getTopicService,
  joinTopicService,
  updateTopicService,
  leaveTopicService,
  deleteTopicService
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
  const { title, description, bannerImage, private } = req.body;
  owner = req.user.userLogedIn._id;

  try {
    const topic = await createNewTopicService(title, description, bannerImage, private, owner);
    return res.status(201).json(topic);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
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
  const {title, description} = req.body
  try {
    await updateTopicService(topicId, title, description);
    return res.status(201).json({message: "Your topic has been updated"});
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const joinTopic = async (req, res, next) => {
  const user = req.user.userLogedIn._id;
  const topicId = req.params.topicId;
  try {
    let topic = await joinTopicService(topicId, user);
    return res.status(201).json({message: "You have joined the topic", topic});
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const leaveTopic = async (req, res, next) => {
  const user = req.user.userLogedIn._id;
  const topicId = req.params.topicId;
  try {
    let topic = await leaveTopicService(topicId, user);
    return res.status(201).json({message: "You have leaved the topic", topic});
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const inviteForTopic = async (req, res, next) => {
  try {
    const topic = await inviteForTopicService(req.params.id, req.body);
    return res.status(201).json(topic);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const deleteTopic = async (req, res, next) => {
  const topicId = req.params.topicId;
  try {
    const topic = await deleteTopicService(topicId);
    return res.status(201).json({message: "The topic has been deleted"});
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
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
  deleteTopic,
};
