const User = require("../models/User-model");
const File = require("../models/File-model");
const Channel = require("../models/Channel-model");
const { createFile, getUserLibrary } = require("../services/libraryServices");

exports.addFile = async (req, res) => {
  const { fileName, category, privacy, fileUrl } = req.body;
  const owner = req.user._id;
  try {
    let file = await createFile(fileName, category, privacy, fileUrl, owner);
    res.status(200).json({ message: "Here's your file", file });
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.userLibrary = async (req, res) => {
  try {
    let userFiles = await getUserLibrary(req.user._id)
    res.status(200).json({ message: "All your files.", userFiles });
  } catch (error) {
    throw new Error(error.message)
  }
};

exports.getLibrary = (req, res) => {
  File.find()
    .populate("owner")
    .then((allFiles) => {
      res.json({ message: "All files here", allFiles });
    });
};

exports.deleteFile = async (req, res) => {
  let file = await File.findByIdAndRemove(req.body.fileToDelete._id);
  try {
    let user = await User.findByIdAndUpdate(req.user._id, {
      $pull: { fileUrl: file._id },
    });

    let channel = await Channel.findOneAndUpdate(
      { name: file.category },
      {
        $pull: { channelFiles: file._id },
      }
    );

    return res.json({ user, channel });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong when deleting this file",
    });
  }
};
