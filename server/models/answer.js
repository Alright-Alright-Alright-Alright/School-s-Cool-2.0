const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const answerSchema = new Schema(
  {
    userId: {
      type: Schema.Types.String,
      ref: "User",
    },
    lessonProgressId: {
      type: Schema.Types.String,
      ref: "LessonProgress",
    },
    itemId: {
      type: Schema.Types.String,
      ref: "Item",
    },
    content: {
      type: Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Answer", answerSchema);
