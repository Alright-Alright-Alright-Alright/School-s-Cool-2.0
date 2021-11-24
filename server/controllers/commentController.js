const {
  getAllCommentsService,
  createCommentService,
  getCommentByIdService,
} = require("../services/commentService");

const getAllComments = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const comment = await getAllCommentsService(postId);
    return res.status(201).json({ message: "Success", comment });
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const createComment = async (req, res, next) => {
  const { commentBody, owner } = req.body;
  const { postId } = req.params

  try {
    const comment = await createCommentService(commentBody, owner, postId);
    return res.status(201).json({ message: "Success", comment });
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const getCommentById = async (req, res, next) => {
  try {
    const comment = await getCommentByIdService(req.params.commentId);
    return res.status(201).json({ message: "Success", comment });
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

module.exports = {
  getAllComments,
  getCommentById,
  createComment,
//   updatecomment,
//   deleteComment,
};
