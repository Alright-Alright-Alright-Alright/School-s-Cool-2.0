const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require("./User-model");

const chatSchema = new Schema(
  {
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
        {
            from:
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
            content:
            {
              type: String,
              required: true
            },
            unread: Boolean,
            read: Boolean,
        }
    ]
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
