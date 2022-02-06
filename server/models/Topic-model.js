const mongoose = require("mongoose");
const { Schema, model } = mongoose;

require("./User-model");
require("./File-model");

const topicSchema = new Schema(
  {
    collectionName: { type: String, default: "topics" },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    isPrivate: { type: Boolean, enum: [true, false], default: false },
    bannerImage: {
      type: String,
    },
    category: {
      type: String, enum: ["Home work", "School work", "Doubts", "Sports", "Entertainment", "Psychology"],
    },
    subject: {
      type: String, enum: ["Biology", "Literature", "Mathematics", "Physics", "Technology", "Football"],
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    resources: [
      {
        type: Schema.Types.ObjectId,
        ref: "File",
      },
    ],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Topic", topicSchema);
