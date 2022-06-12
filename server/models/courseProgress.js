const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const courseProgressSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
    started: {
      type: Schema.Types.Boolean,
    },
    completed: {
      type: Schema.Types.Boolean,
    },
    currentLesson: {
      type: Schema.Types.ObjectId,
      ref: "Lesson",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("CourseProgress", courseProgressSchema);
