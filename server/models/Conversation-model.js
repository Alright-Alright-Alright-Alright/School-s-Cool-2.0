const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require("./User-model");

const conversationSchema = new Schema(
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
        }
    ]
  },
  {
    timestamps: true,
  }
);

const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation;
