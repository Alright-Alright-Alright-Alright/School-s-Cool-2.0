const mongoose = require("mongoose");
const CommentModel = require("./Comment-model");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    body: {
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
    event: {
        type: Schema.Types.ObjectId,
        ref: "Event"
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

postSchema.pre("deleteOne", function(next) {
  CommentModel.deleteMany({ post: this._conditions._id }).exec();
  next();
})

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
