const mongoose = require("mongoose");
const Course = require("./course");
const { Schema, model } = mongoose;

const lessonSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
    },
    description: {
      type: Schema.Types.String,
    },
    courseId: { type: Schema.Types.ObjectId, ref: "Course" },
    items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  },
  {
    timestamps: true,
  }
);

lessonSchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    // 'this' refers to the item being deleted
    await Course.updateOne(
      {
        _id: this.courseId,
      },
      {
        $pull: {
          lessons: this._id,
        },
      }
    );
    next();
  }
);

module.exports = model("Lesson", lessonSchema);
