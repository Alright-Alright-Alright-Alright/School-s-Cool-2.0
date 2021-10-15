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
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post"
  }, 
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event"
}
  },
  {
    timestamps: true,
  }
);

module.exports = model("Comment", commentSchema);
