const {
    getAllTopicsService
  } = require("../services/topicService");

const dummyData = [
    [{ titleTest: "Topic 1", comment: ["1", "2", "3"], user: ["1", "2", "3"] }],
    [{ titleTest: "Topic 2", comment: ["1"], user: ["1", "2", "3"] }],
    [
      {
        titleTest: "Topic 3",
        date: "02-01-2021",
        comment: [["1", "2"]],
        user: ["1", "2", "3"],
      },
    ],
    [{ titleTest: "Topic 4", comment: [["1", "2"]], user: ["1", "2", "3"] }],
    [
      {
        titleTest: "Topic 5",
        date: "02-01-2021",
        comment: [["1", "2"]],
        user: ["1", "2", "3"],
      },
    ],
    [{ titleTest: "Topic 6", comment: [["1", "2"]], user: ["1", "2", "3"] }],
  ]

const getAllTopics = async (req, res, next) => {
        try {
          const topics = await getAllTopicsService();
          return res.status(201).json(topics);
        } catch (e) {
          res.status(500).json({ message: e.message }) && next(e);
        }
      };

const createNewTopic = async (req, res, next) => {
        try {
          const topic = await createNewTopicService(req.body);
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