const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const itemSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
    },
    items: Schema.Types.Mixed,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Item", itemSchema);
