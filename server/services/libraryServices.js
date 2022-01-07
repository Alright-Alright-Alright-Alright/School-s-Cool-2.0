const {
  creatingFile,
  getingUserLibrary,
  getingLibrary,
  fileDeleting,
  addLikeToFileDb,
  pullLikeToFileDb,
  getingSingleFileDB
} = require("../db/libraryDb");

exports.createFile = async (title, category, subject, isPrivate, fileUrl, owner) => {
  try {
    let file = await creatingFile(title, category, subject, isPrivate, fileUrl, owner);
    return file;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.addLikeService = async (fileId, user) => {
  try {
    return await addLikeToFileDb(fileId, user)
  } catch (error) {
    throw new Error(error.message);
  }
}

exports.pullLikeService = async (fileId, user) => {
  try {
    return await pullLikeToFileDb(fileId, user)
  } catch (error) {
    throw new Error(error.message);
  }
}

exports.getUserLibrary = async (user) => {
  try {
    return getingUserLibrary(user);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getingSingleFile = async (fileId) => {
  try {
    return getingSingleFileDB(fileId);
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
