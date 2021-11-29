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
  const { body, owner } = req.body;
  const { postId } = req.params

  // const { userId } = req.userLogedIn._id
  try {
    const comment = await createCommentService(body, owner, postId);
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
