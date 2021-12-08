const {
    getAllCommentsDb,
    addCommentToDb,
    getCommentByIdDb
  } = require("../db/commentDb");
  
const getAllCommentsService = async (topicId) => {
    try {
      return await getAllCommentsDb(topicId);
    } catch (e) {
      throw new Error(e.message);
    }
  };

const createCommentService = async ( owner, body, postId) => {
    try {
        return await addCommentToDb( owner, body, postId);
    } catch (e) {
        throw new Error(e.message);
    }
};

const getCommentByIdService = async (postId) => {
    try {
        return await getCommentByIdDb(postId);
    } catch (e) {
        throw new Error(e.message);
    }
};

module.exports = {
    getAllCommentsService,
    createCommentService,
    getCommentByIdService,
};