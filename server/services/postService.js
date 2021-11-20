const {
    getAllPostsDb,
    addPostToDb,
    getPostsByTopicIdDb,
    getPostByIdDb
  } = require("../db/postDb");
  
const getAllPostsService = async (topicId) => {
    try {
      return await getAllPostsDb(topicId);
    } catch (e) {
      throw new Error(e.message);
    }
  };

const createPostService = async (title, body, author, topicId) => {
    try {
        return await addPostToDb(title, body, author, topicId);
    } catch (e) {
        throw new Error(e.message);
    }
};

const getPostsByTopicIdService = async (topicId) => {
    try {
        return await getPostsByTopicIdDb(topicId);
    } catch (e) {
        throw new Error(e.message);
    }
};

const getPostByIdService = async (postId) => {
    try {
        return await getPostByIdDb(postId);
    } catch (e) {
        throw new Error(e.message);
    }
};

module.exports = {
    getAllPostsService, 
    createPostService, 
    getPostByIdService, 
    getPostsByTopicIdService
};