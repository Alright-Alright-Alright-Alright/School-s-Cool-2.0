const {
    getAllTopicsService,
    createNewTopicService
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
  const { title, description } = req.body;
  author = req.user.userLogedIn._id
  
  try {
    const topic = await createNewTopicService(title, description, author);
    return res.status(201).json(topic);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const getTopic = async (req, res, next) => {
        try {
          const topic = await getTopicService(req.params.id);
          return res.status(201).json(topic);
        } catch (e) {
          res.status(500).json({ message: e.message }) && next(e);
        }
      }

const updateTopic = async (req, res, next) => {
        try {
          const topic = await updateTopicService(req.params.id, req.body);
          return res.status(201).json(topic);
        } catch (e) {
          res.status(500).json({ message: e.message }) && next(e);
        }
      }
    
const joinTopic = async (req, res, next) => {
        try {
          const topic = await joinTopicService(req.params.id);
          return res.status(201).json(topic);
        } catch (e) {
          res.status(500).json({ message: e.message }) && next(e);
        }
      }

const leaveTopic = async (req, res, next) => {
        try {
          const topic = await leaveTopicService(req.params.id);
          return res.status(201).json(topic);
        } catch (e) {
          res.status(500).json({ message: e.message }) && next(e);
        }
      }

const inviteForTopic = async (req, res, next) => {
        try {
          const topic = await inviteForTopicService(req.params.id, req.body);
          return res.status(201).json(topic);
        } catch (e) {
          res.status(500).json({ message: e.message }) && next(e);
        }
      }

const deleteTopic = async (req, res, next) => {
        try {
          const topic = await deleteTopicService(req.params.id);
          return res.status(201).json(topic);
        } catch (e) {
          res.status(500).json({ message: e.message }) && next(e);
        }
      }

module.exports = {
    getAllTopics,
    createNewTopic,
    getTopic,
    updateTopic,
    joinTopic,
    leaveTopic,
    inviteForTopic,
    deleteTopic
}