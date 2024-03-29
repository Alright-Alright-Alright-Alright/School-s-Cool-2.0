const User = require("../models/User-model");
const File = require("../models/File-model");
const Topic = require("../models/Topic-model");

exports.creatingFile = async (
  title,
  category,
  subject,
  isPrivate,
  fileUrl,
  tags,
  owner
) => {
  try {
    let file = await File.create({
      title,
      category,
      subject,
      isPrivate,
      fileUrl,
      tags,
      owner,
    }).then(async (fileToPopulate) => {
      const result = await File.findById(fileToPopulate._id).populate("owner");
      return result;
    });

    await User.findByIdAndUpdate(owner, {
      $push: { resources: file._id },
    });

    await Topic.updateMany(
      { category: file.category, subject: file.subject },
      {
        $push: { resources: file._id },
      },
      { new: true }
    );

    return file;
  } catch (error) {
    throw new Error("Something went wrong adding a file", error.message);
  }
};

exports.addLikeToFileDb = async (fileId, user) => {
  try {
    let fileLiked = await File.findByIdAndUpdate(
      fileId,
      {
        $push: { likedBy: user },
      },
      { new: true }
    ).then((likedFile) => {
      let result = File.findById(likedFile._id)
        .populate("owner")
        .populate({
          path: "comments",
          populate: {
            path: "owner",
            select: "firstName lastName imageUrl",
          },
        });
      return result;
    });
    return fileLiked;
  } catch (error) {
    throw new Error(error);
  }
};

exports.pullLikeToFileDb = async (fileId, user) => {
  try {
    let fileUnliked = await File.findByIdAndUpdate(
      fileId,
      {
        $pull: { likedBy: user },
      },
      { new: true }
    ).then((unlikeFile) => {
      let result = File.findById(unlikeFile._id)
        .populate("owner")
        .populate({
          path: "comments",
          populate: {
            path: "owner",
            select: "firstName lastName imageUrl",
          },
        });
      return result;
    });
    return fileUnliked;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getingUserLibrary = async (user) => {
  try {
    return await User.findById(user)
      .populate({ path: "resources", populate: { path: "owner" } })
      .then((userData) => {
        let userFiles = userData.resources;
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
      .populate({
        path: "comments",
        populate: {
          path: "owner",
          select: "firstName lastName imageUrl",
        },
      })
      .then((allFiles) => {
        return allFiles;
      });
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getingSingleFileDB = async (fileId) => {
  try {
    return await File.findById(fileId)
      .populate("owner", "firstName lastName imageUrl")
      .populate({
        path: "comments",
        populate: {
          path: "owner",
          select: "firstName lastName imageUrl",
        },
      });
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.fileDeleting = async (userId, fileToDelete) => {
  let file = await File.findByIdAndRemove(fileToDelete);
  try {
    let user = await User.findByIdAndUpdate(userId, {
      $pull: { resources: file._id },
    });

    let topic = await Topic.updateMany(
      { category: file.category, subject: file.subject },
      {
        $pull: { resources: file._id },
      }
    );
    return { user, topic };
  } catch (error) {
    throw new Error("Something went wrong when deleting this file");
  }
};
