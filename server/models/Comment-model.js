const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    body:{
        type: String
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Comment", commentSchema);
