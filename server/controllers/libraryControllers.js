const User = require("../models/User-model");
const File = require("../models/File-model");
const Channel = require("../models/Channel-model");

exports.addFile = async (req, res) => {
  const { fileName, category, privacy, fileUrl } = req.body;
  let file = await File.create({
    fileName,
    category,
    privacy,
    fileUrl,
    owner: req.user._id,
  });
  try {
    let user = await User.findByIdAndUpdate(req.user._id, {
      $push: { fileUrl: file._id },
    });

    let channel = await Channel.findOneAndUpdate(
      { name: file.category },
      {
        $push: { channelFiles: file._id },
      }
    );

    return res.json({ user, channel });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong adding a file",
    });
  }
};

exports.userLibrary = (req, res) => {
  User.findById(req.user._id)
    .populate({ path: "fileUrl", populate: { path: "owner" } })
    .then((userData) => {
      let userFiles = userData.fileUrl;
      res.json({ message: "All files here", userFiles });
    });
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
