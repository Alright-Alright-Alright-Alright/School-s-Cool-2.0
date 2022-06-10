const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const lessonProgressSchema = new Schema(
  {
    userId: {
      type: Schema.Types.String,
      ref: "User",
    },
    courseProgressId: {
      type: Schema.Types.ObjectId,
      ref: "CourseProgress",
    },
    started: {
      type: Schema.Types.Boolean,
    },
    completed: {
      type: Schema.Types.Boolean,
    },
    currentItem: {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("LessonProgress", lessonProgressSchema);
