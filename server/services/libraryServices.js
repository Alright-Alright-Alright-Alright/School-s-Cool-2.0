const { creatingFile, getingUserLibrary } = require("../db/libraryDb");

exports.createFile = async (fileName, category, privacy, fileUrl, owner) => {
  try {
    let file = await creatingFile(fileName, category, privacy, fileUrl, owner);
    return file;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getUserLibrary = async (owner) => {
  try {
    return getingUserLibrary(owner)
  } catch (error) {
    throw new Error(error.message)
  }
}