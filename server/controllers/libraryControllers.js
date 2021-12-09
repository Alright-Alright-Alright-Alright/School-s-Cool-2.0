const {
  createFile,
  getUserLibrary,
  getLibrary,
  fileDelete,
} = require("../services/libraryServices");

exports.addFile = async (req, res) => {
  const { fileName, category, subject, isPrivate, fileUrl } = req.body;
  const owner = req.user.userLogedIn._id;
  try {
    let file = await createFile(fileName, category, subject, isPrivate, fileUrl, owner);
    res.status(200).json({ message: "Here's your file", file });
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.userLibrary = async (req, res) => {
  try {
    let userFiles = await getUserLibrary(req.user.userLogedIn._id);
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

exports.deleteFile = async (req, res) => {
  let userId = await req.user.userLogedIn._id;
  let fileToDelete = await req.body.fileToDelete._id;

  try {
    let file = fileDelete(userId, fileToDelete);
    res.status(200).json({ message: "File deleted", file });
  } catch (error) {
    throw new Error(error.message);
  }
};
