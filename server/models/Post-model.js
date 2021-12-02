const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// require("./User-model");
// require("./Channel-model");
// require("./Comment-model")

const postSchema = new Schema(
  {
<<<<<<< HEAD
    title: {
      type: String,
      required: true
    },
    description: {
=======
    body: {

>>>>>>> db8269b3d355fdef1a7d1592a57cb40ef7a2df91
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    topic: {
        type: Schema.Types.ObjectId,
        ref: "Topic"
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    likedBy: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
