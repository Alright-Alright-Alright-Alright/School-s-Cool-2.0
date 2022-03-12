const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    body: {
      type: String,
    },
    topic: {
      type: Schema.Types.ObjectId,
      ref: "Topic",
    },
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Comment", commentSchema);
