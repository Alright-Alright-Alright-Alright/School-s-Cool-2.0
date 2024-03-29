const {
    getAllPostsDb,
    addPostToDb,
    getPostsByTopicIdDb,
    getPostByIdDb,
    likePostDb,
    unlikePostDb,
    deletePostDb,
    updatePostDb
  } = require("../db/postDb");
  
const getAllPostsService = async (topicId, eventId) => {
    try {
      return await getAllPostsDb(topicId, eventId);
    } catch (e) {
      throw new Error(e.message);
    }
  };

const createPostService = async ( body, author, topicId, eventId) => {
    try {
        return await addPostToDb( body, author, topicId, eventId);
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

const updatePostService = async (postId, body) => {
    try {
        return await updatePostDb(postId, body);
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

const deletePostService = async (postId, parentId) => {
    try {
        return await deletePostDb(postId, parentId);
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    getAllPostsService, 
    createPostService, 
    getPostByIdService, 
    getPostsByTopicIdService,
    likePostService,
    unlikePostService,
    deletePostService,
    updatePostService
};