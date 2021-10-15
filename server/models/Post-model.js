const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require("./User-model");
require("./Channel-model");
require("./Comment-model")

const postSchema = new Schema(
  {
    postTitle: {
      type: String,
      required: true
    },
    postBody: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    channel: {
        type: Schema.Types.ObjectId,
        ref: "Channel"
    },
    comment: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    votes: [{
      type: String
    }],
    showContent: {
      type: Boolean,
      default: true
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
