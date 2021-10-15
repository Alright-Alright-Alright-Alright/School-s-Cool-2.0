const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require("./User-model");

const fileSchema = new Schema(
  {
    fileName: String,
    privacy: { type: String, enum: ["Yes", "No"], default: "No" },
    fileUrl: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: String,
      //required: [true, "Category is required."],
    }
  },
  {
    timestamps: true,
  }
);

const File = mongoose.model("File", fileSchema);
module.exports = File;
