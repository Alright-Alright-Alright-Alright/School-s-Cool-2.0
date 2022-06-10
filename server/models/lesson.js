const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const lessonSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
    },
    description: {
      type: Schema.Types.String,
    },
    items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Lesson", lessonSchema);
