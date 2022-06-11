const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const courseSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
    },
    description: {
      type: Schema.Types.String,
    },
    imageUrl: {
      type: Schema.Types.String,
      ref: "Topic",
    },
    lessons: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
    creator: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Course", courseSchema);
