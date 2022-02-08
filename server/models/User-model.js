const mongoose = require("mongoose");
const { Schema, model } = mongoose;

require("./File-model");

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    imageUrl: {
      type: String,
      default:
        "http://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM=",
    },
    role: {
      type: String,
      enum: ["USER", "EDITOR", "ADMIN"],
      default: "USER",
    },
    resources: [
      {
        type: Schema.Types.ObjectId,
        ref: "File",
      },
    ],
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    courses: {
      type: Array,
      default: [],
    },
    lastLoginDate: {
      type: Date,
      default: Date.now
  },
    resetToken: String,
    expireToken: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
