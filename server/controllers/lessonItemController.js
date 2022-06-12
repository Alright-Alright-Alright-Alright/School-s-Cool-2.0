const Lesson = require("../models/lesson");
const LessonItem = require("../models/item");
const LessonProgress = require("../models/lessonProgress");
const Answer = require("../models/answer");
const { calculateScore } = require("./_utils");

const createItem = async (req, res, next) => {
  const requiredFields = ["type", "index", "lessonId", "content"];
  if (requiredFields.every((field) => field in Object.keys(req.body))) {
    return res
      .status(400)
      .send({ message: `Please provide: ${requiredFields.join(", ")}` });
  }

  try {
    const lesson = await Lesson.findById(req.body.lessonId).populate("items");

    // Ensure no gaps between items are created
    if (req.body.index > lesson.items.length) {
      return res.status(400).send({ message: "Provided index invalid" });
    }

    // If item is added before, ensure to increase the index of all subsequent items
    if (req.body.index < lesson.items.length) {
      for await (const item of lesson.items) {
        if (item.index >= req.body.index) {
          item.index += 1;
          item.save();
        }
      }
    }

    // Finally, insert the item and update the lesson
    const createdItem = await LessonItem.create({
      ...req.body,
      lesson: req.body.lessonId,
    });
    // Add the created item to the lesson
    await Lesson.updateOne(
      {
        _id: req.body.lessonId,
      },
      {
        $push: {
          items: createdItem.id,
        },
      }
    );

    res.status(200).send({ data: createdItem._id });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

const deleteItem = async (req, res, next) => {
  const requiredFields = ["id"];
  if (requiredFields.every((field) => field in Object.keys(req.params))) {
    return res
      .status(400)
      .send({ message: `Please provide: ${requiredFields.join(", ")}` });
  }

  try {
    await LessonItem.deleteOne({ _id: req.params.id });
    res.status(200).send({ message: "DELETED" });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

const getItem = async (req, res, next) => {
  const requiredFields = ["id"];
  if (requiredFields.every((field) => field in Object.keys(req.params))) {
    return res
      .status(400)
      .send({ message: `Please provide: ${requiredFields.join(", ")}` });
  }

  try {
    const item = await LessonItem.findById(req.params.id);
    res.status(200).send({ data: item });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

const updateItem = async (req, res, next) => {
  // Ensure all fields are present
  const requiredFields = ["_id", "type", "index", "lessonId", "content"];
  if (requiredFields.every((field) => field in Object.keys(req.body))) {
    return res
      .status(400)
      .send({ message: `Please provide: ${requiredFields.join(", ")}` });
  }

  try {
    const lessonItem = await LessonItem.findById(req.body._id);
    // Ensure item exists
    if (!lessonItem) {
      return res.status(404).send();
    }

    // Ensure lesson id does not change. Not supported
    await lessonItem.populate("lesson");
    if (!lessonItem.lesson) {
      return res
        .status(400)
        .send({ message: "Lesson item does not belong to a lesson" });
    }

    if (!lessonItem.lesson._id.equals(req.body.lessonId)) {
      return res.status(400).send({ message: "Cannot change lesson id" });
    }

    // Ensure type does not change. Not supported
    if (lessonItem.type !== req.body.type) {
      return res.status(400).send({ message: "Cannot change type" });
    }

    const lesson = await Lesson.findById(req.body.lessonId).populate("items");
    // Ensure the lesson exists
    if (!lesson) {
      return res.status(404).send({ message: "Lesson not found" });
    }

    const itemToUpdate = lessonItem;
    const newIndex = req.body.index;
    const oldIndex = itemToUpdate.index;

    // TODO: refactor this into a swap between indices, instead of shifting everything
    // If ordering has changed, account for it by updating the index of all subsequent items
    if (newIndex !== oldIndex) {
      // If the new index is lower than the old index, move all items between the new index and the old index up by 1
      if (newIndex < oldIndex) {
        for await (const item of lesson.items) {
          if (item.index >= newIndex && item.index < oldIndex) {
            item.index += 1;
            await item.save();
          }
        }
      }

      // If the new index is higher than the old index, move all items between the new index and the old index down by 1
      if (newIndex > oldIndex) {
        for await (const item of lesson.items) {
          if (item.index <= newIndex && item.index > oldIndex) {
            item.index -= 1;
            await item.save();
          }
        }
      }
    }

    const updatedItem = await LessonItem.findByIdAndUpdate(
      req.body._id,
      req.body
    );
    res.status(200).send({ data: updatedItem });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

const submitItem = async (req, res, next) => {
  // Ensure all fields are present
  const requiredFields = ["id", "answer"];
  if (requiredFields.every((field) => field in Object.keys(req.body))) {
    return res
      .status(400)
      .send({ message: `Please provide: ${requiredFields.join(", ")}` });
  }

  try {
    // Get the lesson item and lesson
    const lessonItem = await LessonItem.findById(req.body.itemId).populate(
      "lesson"
    );
    if (!lessonItem || !lessonItem.lesson) {
      return res
        .status(404)
        .send({ message: "Lesson or lessonItem does not exist" });
    }

    // Ensure the user has started this lesson
    const lessonProgress = await LessonProgress.findOne({
      userId: req.user.userLogedIn,
      lesson: lessonItem.lesson._id,
    });

    if (!lessonProgress) {
      return res
        .status(400)
        .send({ message: "User has not started this lesson" });
    }

    // Ensure user has not already submitted an answer
    const existingAnswer = await Answer.findOne({
      userId: req.user.userLogedIn,
      lessonProgress: lessonProgress._id,
    });
    if (existingAnswer) {
      return res
        .status(400)
        .send({ message: "User has already submitted an answer previously" });
    }

    // Create the answer item
    const score = await calculateScore(req.body.itemId, req.body.answer);
    // const answer = await Answer.create({
    //   userId: req.user.userLogedIn,
    //   lessonProgress: lessonProgress._id,
    //   item: req.body.itemId,
    //   content: req.body.answer,
    //   score,
    // });

    // Update progress in lesson
    // If this was the final lessonItem, complete the lesson
    const { lesson, currentItem } = await lessonProgress.populate(
      "currentItem"
    );
    console.log(currentItem);
    const newIndex = currentItem.index;
    console.log({ newIndex });
    // If this was the last lesson, complete the course
    // If none of the above, set the current lessonItem to the next one

    res.status(201).send({ data: {} });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

module.exports = {
  createItem,
  deleteItem,
  getItem,
  updateItem,
  submitItem,
};
