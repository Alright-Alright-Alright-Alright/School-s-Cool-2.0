const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventSchema = new Schema(
  {
    collectionName: { type: String, default: "events" },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    title: {
      type: String,
      trim: true,
      required: [true, "Event name is required."],
    },
    dateStart: {
      type: Date,
      required: [true, "Date is required."],
    },
    dateEnd: {
      type: Date,
    },
    location: {
      type: String,
    },
    description: {
      type: String,
    },
    bannerImage: {
      type: String,
      default:
        "https://cdn.eventplanner.be/imgs/xr10330_test-event-in-hasselt-met-1000-jongeren@2x.jpg",
    },
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

module.exports = model("Event", eventSchema);
