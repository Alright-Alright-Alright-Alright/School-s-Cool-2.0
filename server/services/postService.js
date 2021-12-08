const {
    getAllPostsDb,
    addPostToDb,
    getPostsByTopicIdDb,
    getPostByIdDb,
    likePostDb,
    unlikePostDb
  } = require("../db/postDb");
  
const getAllPostsService = async (topicId) => {
    try {
      return await getAllPostsDb(topicId);
    } catch (e) {
      throw new Error(e.message);
    }
  };

const createPostService = async ( body, author, topicId) => {
    try {
        return await addPostToDb( body, author, topicId);
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

const likePostService = async (postId, userId) => {
    try {
        return await likePostDb(postId, userId);
    } catch (e) {
        throw new Error(e.message);
    }
};

const unlikePostService = async (postId, userId) => {
    try {
        return await unlikePostDb(postId, userId);
    } catch (e) {
        throw new Error(e.message);
    }
};

module.exports = {
    getAllPostsService, 
    createPostService, 
    getPostByIdService, 
    getPostsByTopicIdService,
    likePostService,
    unlikePostService
};