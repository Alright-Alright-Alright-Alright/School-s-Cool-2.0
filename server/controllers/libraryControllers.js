const {
  createFile,
  getUserLibrary,
  getLibrary,
  fileDelete,
  addLikeService,
  pullLikeService,
  getingSingleFile
} = require("../services/libraryServices");

exports.addFile = async (req, res) => {
  const { title, category, subject, isPrivate, fileUrl } = req.body;
  const owner = req.user.userLogedIn._id;
  try {
    let file = await createFile(
      title,
      category,
      subject,
      isPrivate,
      fileUrl,
      owner
    );
    res.status(200).json({ message: "Here's your file", file });
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.addLike = async (req, res) => {
  let fileId = req.params.fileId;
  let user = req.user.userLogedIn._id;
  try {
    let file = await addLikeService(fileId, user);
    res.status(200).json(file);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.pullLike = async (req, res) => {
  let fileId = req.params.fileId;
  let user = req.user.userLogedIn._id;
  try {
    let file = await pullLikeService(fileId, user);
    res.status(200).json(file);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.userLibrary = async (req, res) => {
  user = req.user.userLogedIn._id;
  try {
    let userFiles = await getUserLibrary(user);
    res.status(200).json(userFiles);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getLibrary = async (req, res) => {
  try {
    let allFiles = await getLibrary();
    res.status(200).json(allFiles);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getSingleFile = async (req, res) => {
  let fileId = req.params.fileId;
  try {
    let file = await getingSingleFile(fileId)
    res.status(200).json(file)
  } catch (error) {
    throw new Error(error.message);
  }
}

exports.deleteFile = async (req, res) => {
  let userId = req.user.userLogedIn._id;
  let fileToDelete = req.body.fileId;

  try {
    let file = await fileDelete(userId, fileToDelete);
    res.status(200).json(file);
  } catch (error) {
    throw new Error(error.message);
  }
};
