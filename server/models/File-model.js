const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require("./User-model");
require("./Comment-model");

const fileSchema = new Schema(
  {
    title: String,
    isPrivate: { type: Boolean, enum: [true, false], default: false },
    fileUrl: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: String
    },
    subject: {
      type: String
    },
    likedBy: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    comments: [{
      type: Schema.Types.ObjectId,
      ref: "Comment"
  }]
  },
  {
    timestamps: true,
  }
);

const File = mongoose.model("File", fileSchema);
module.exports = File;
