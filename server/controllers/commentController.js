const {
  getAllCommentsService,
  createCommentService,
  getCommentByIdService,
  deletingCommentService,
} = require("../services/commentService");

const getAllComments = async (req, res, next) => {
  const id = req.params.postId ? req.params.postId : req.params.fileId;

  try {
    const comment = await getAllCommentsService(id);
    return res.status(201).json(comment);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const createComment = async (req, res, next) => {
  const { commentBody } = req.body;
  const id = req.body.postId ? req.body.postId : req.body.fileId;
  const owner = req.user.userLogedIn;
  try {
    const comment = await createCommentService(owner, commentBody, id);
    return res.status(201).json(comment);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const getCommentById = async (req, res, next) => {
  try {
    const comment = await getCommentByIdService(req.params.commentId);
    return res.status(201).json(comment);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const deleteComment = async (req, res, next) => {
  const { commentId, id } = req.body;

  try {
    const comment = await deletingCommentService(commentId, id);
    return res.status(201).json(comment);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

module.exports = {
  getAllComments,
  getCommentById,
  createComment,
  deleteComment,
};
