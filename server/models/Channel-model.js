const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require("./User-model");
require("./File-model");

const channelSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
    },
    description: String,
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    channelFiles: [
      {
        type: Schema.Types.ObjectId,
        ref: "File",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Channel = mongoose.model("Channel", channelSchema);
module.exports = Channel;
