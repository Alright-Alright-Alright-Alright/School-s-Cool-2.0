const mongoose = require("mongoose");
const { Schema, model } = mongoose;

require("./User-model");
require("./File-model");

const topicSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
<<<<<<< HEAD
    private: { type: String, enum: ["Yes", "No"], default: "No" },
=======
    private: { type: Boolean, enum: [true, false], default: false },
>>>>>>> db8269b3d355fdef1a7d1592a57cb40ef7a2df91
    bannerImage: {
      type: String,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    recources: [
      {
        type: Schema.Types.ObjectId,
        ref: "File",
      },
    ],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Topic", topicSchema);
