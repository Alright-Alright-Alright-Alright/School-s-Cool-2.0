const {
    getAllCommentsDb,
    addCommentToDb,
    getCommentByIdDb,
    deletingCommentFromDb
  } = require("../db/commentDb");
  
const getAllCommentsService = async (id) => {
    try {
      return await getAllCommentsDb(id);
    } catch (e) {
      throw new Error(e.message);
    }
  };

const createCommentService = async ( owner, body, id) => {
    try {
        return await addCommentToDb( owner, body, id);
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

const deletingCommentService = async (commentId, id) => {
  try {
      return await deletingCommentFromDb(commentId, id);
  } catch (e) {
      throw new Error(e.message);
  }
};

module.exports = {
    getAllCommentsService,
    createCommentService,
    getCommentByIdService,
    deletingCommentService,
};