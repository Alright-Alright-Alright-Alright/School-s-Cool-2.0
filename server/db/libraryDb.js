const User = require("../models/User-model");
const File = require("../models/File-model");
const Channel = require("../models/Channel-model");

exports.creatingFile = async (fileName, category, privacy, fileUrl, owner) => {
  let file = await File.create({
    fileName,
    category,
    privacy,
    fileUrl,
    owner,
  });
  try {
    let user = await User.findByIdAndUpdate(owner, {
      $push: { fileUrl: file._id },
    });

    let channel = await Channel.findOneAndUpdate(
      { name: file.category },
      {
        $push: { channelFiles: file._id },
      }
    );

    return { user, channel };
  } catch (error) {
    throw new Error("Something went wrong adding a file", error.message);
  }
};

exports.getingUserLibrary = async (owner) => {
  try {
    return await User.findById(owner)
      .populate({ path: "fileUrl", populate: { path: "owner" } })
      .then((userData) => {
        let userFiles = userData.fileUrl;
        return userFiles;
      });
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getingLibrary = async () => {
  try {
    return await File.find()
      .populate("owner")
      .then((allFiles) => {
        return allFiles;
      });
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.fileDeleting = async (userId, fileToDelete) => {
  let file = await File.findByIdAndRemove(fileToDelete);
  try {
    let user = await User.findByIdAndUpdate(userId, {
      $pull: { fileUrl: file._id },
    });

    let channel = await Channel.findOneAndUpdate(
      { name: file.category },
      {
        $pull: { channelFiles: file._id },
      }
    );
    return { user, channel };
  } catch (error) {
    throw new Error("Something went wrong when deleting this file");
  }
};
