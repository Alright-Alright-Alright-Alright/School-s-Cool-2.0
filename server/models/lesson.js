const mongoose = require("mongoose");
const Course = require("./course");
const LessonItem = require("./item");
const { Schema, model } = mongoose;

const lessonSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
    },
    description: {
      type: Schema.Types.String,
    },
    course: { type: Schema.Types.ObjectId, ref: "Course" },
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

    // Remove this lesson id from the course
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

    // Remove all lesson items
    await LessonItem.deleteMany({
      lessonId: this._id,
    });

    next();
  }
);

module.exports = model("Lesson", lessonSchema);
