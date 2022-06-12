const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const answerSchema = new Schema(
  {
    userId: {
      type: Schema.Types.String,
      ref: "User",
    },
    lessonProgress: {
      type: Schema.Types.ObjectId,
      ref: "LessonProgress",
    },
    item: {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
    content: {
      type: Schema.Types.Mixed,
    },
    score: {
      type: Schema.Types.Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Answer", answerSchema);
