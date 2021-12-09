const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require("./User-model");

const fileSchema = new Schema(
  {
    fileName: String,
    isPrivate: { type: Boolean, enum: [true, false], default: false },
    fileUrl: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: String
    },
    subject: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

const File = mongoose.model("File", fileSchema);
module.exports = File;
