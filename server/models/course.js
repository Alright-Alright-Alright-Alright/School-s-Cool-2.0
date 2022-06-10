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
  },
  {
    timestamps: true,
  }
);

module.exports = model("Course", courseSchema);
