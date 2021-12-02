const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require("./User-model");

const fileSchema = new Schema(
  {
    fileName: String,
<<<<<<< HEAD
    private: { type: String, enum: ["Yes", "No"], default: "No" },
=======
    private: { type: Boolean, enum: [true, false], default: false },
>>>>>>> db8269b3d355fdef1a7d1592a57cb40ef7a2df91
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
