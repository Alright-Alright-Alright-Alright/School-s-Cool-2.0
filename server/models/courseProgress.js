const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const courseProgressSchema = new Schema(
  {
    userId: {
      type: Schema.Types.String,
      ref: "User",
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
