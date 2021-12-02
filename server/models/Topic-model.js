const mongoose = require("mongoose");
const { Schema, model } = mongoose;

require("./User-model");
require("./File-model");

const topicSchema = new Schema(
  {
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
    private: { type: Boolean, enum: [true, false], default: false },
    bannerImage: {
      type: String,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    recources: [
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
