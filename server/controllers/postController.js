const { getAllPostsService, createPostService, getPostsByTopicIdService, getPostByIdService } = require("../services/postService");

const getAllPosts = async (req, res, next) => {
    const { topicId } = req.params;
        try {
          const posts = await getAllPostsService(topicId);
          return res.status(201).json({message: "Success", posts});
        } catch (e) {
          res.status(500).json({ message: e.message }) && next(e);
        }
      };

const createPost = async (req, res, next) => {
    const { body, owner, topicId } = req.body;
    // const { _id } = req.user.userLogedIn;
    // console.log(_id)
        try {
          const post = await createPostService( body, owner, topicId);
            return res.status(201).json({message: "Success", post});
        } catch (e) {
            res.status(500).json({ message: e.message }) && next(e);
        }
        };

const getPostsByTopicId = async (req, res, next) => {
    const { topicId } = req.params;
    try {   
        const posts = await getPostsByTopicIdService(topicId);
        return res.status(201).json({message: "Success", posts});
    } catch (e) {
        res.status(500).json({ message: e.message }) && next(e);
    }
};

const getPostById = async (req, res, next) => {
        try {
          const post = await getPostByIdService(req.params.postId);
            return res.status(201).json({message: "Success", post});
        } catch (e) {
            res.status(500).json({ message: e.message }) && next(e);
        }
        };


module.exports = {
    getAllPosts,
    getPostById, 
    createPost,
    getPostsByTopicId
    // updatePost, deletePost
}