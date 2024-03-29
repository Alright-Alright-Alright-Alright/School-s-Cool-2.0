const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require("./User-model");
require("./Comment-model");

const fileSchema = new Schema(
  {
    collectionName: { type: String, default: "library" },
    title: String,
    isPrivate: { type: Boolean, enum: [true, false], default: false },
    fileUrl: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    likedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    tags: {
      type: [String],
      validate: [arrayLimit, "Exceeds the limit of 5"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

function arrayLimit(val) {
  return val.length <= 5;
}

const File = mongoose.model("File", fileSchema);
module.exports = File;
