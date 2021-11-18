const {
  creatingFile,
  getingUserLibrary,
  getingLibrary,
  fileDeleting,
} = require("../db/libraryDb");

exports.createFile = async (fileName, category, private, fileUrl, owner) => {
  try {
    let file = await creatingFile(fileName, category, private, fileUrl, owner);
    return file;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getUserLibrary = async (owner) => {
  try {
    return getingUserLibrary(owner);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getLibrary = async () => {
  try {
    return await getingLibrary();
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.fileDelete = async (userId, fileToDelete) => {
  try {
    return fileDeleting(userId, fileToDelete);
  } catch (error) {
    throw new Error(error.message);
  }
};
