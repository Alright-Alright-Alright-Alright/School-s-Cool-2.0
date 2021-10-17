const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventSchema = new Schema(
  {
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    eventName: {
      type: String,
      trim: true,
      required: [true, "Event name is required."],
    },
    eventDateStart: {
      type: Date,
      required: [true, "Date is required."],
    },
    eventDateEnd: {
      type: Date,
    },
    eventLocation: {
      type: String,
    },
    eventDescription:{
        type: String
    },
    eventBannerImage: {
      type: String,
      default: "https://cdn.eventplanner.be/imgs/xr10330_test-event-in-hasselt-met-1000-jongeren@2x.jpg"
    },
    comment: [{
      type: Schema.Types.ObjectId,
      ref: "Comment"
  }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Event", eventSchema);
