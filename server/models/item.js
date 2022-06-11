const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const itemSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
    },
    lessonId: Schema.Types.ObjectId,
    content: Schema.Types.Mixed,
    index: Schema.Types.Number,
    type: Schema.Types.String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Item", itemSchema);
