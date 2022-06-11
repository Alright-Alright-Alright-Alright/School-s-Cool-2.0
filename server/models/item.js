const mongoose = require("mongoose");
const Lesson = require("./lesson");
const { Schema, model } = mongoose;

const itemSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
    },
    lessonId: Schema.Types.ObjectId,
    content: Schema.Types.Mixed,
    index: Schema.Types.Number,
    type: Schema.Types.String,
  },
  {
    timestamps: true,
  }
);

itemSchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    // 'this' refers to the item being deleted

    // Remove this lesson item from the lesson
    await Lesson.updateOne(
      {
        _id: this.lessonId,
      },
      {
        $pull: {
          items: this._id,
        },
      }
    );

    next();
  }
);

module.exports = model("Item", itemSchema);
