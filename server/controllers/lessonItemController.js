const Lesson = require("../models/lesson");
const LessonItem = require("../models/item");

const createItem = async (req, res, next) => {
  const requiredFields = ["type", "index", "lessonId", "content"];
  if (requiredFields.every((field) => field in Object.keys(req.body))) {
    return res
      .status(400)
      .send({ message: `Please provide: ${requiredFields.join(", ")}` });
  }

  try {
    const createdItem = await LessonItem.create(req.body);
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
  const id = req.params.id;
  if (!id) {
    return res.status(400).send({ message: "Please provide: id" });
  }

  try {
    await Item.deleteOne({ _id: id });
    res.status(200).send({ message: "DELETED" });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

const getItem = async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send({ message: "Please provide: id" });
  }

  try {
    const item = await Item.findById(id);
    res.status(200).send({ data: item });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

const updateItem = async (req, res, next) => {
  const newItem = req.body;

  // Ensure all fields are present
  const requiredFields = ["_id", "type", "index", "lessonId", "content"];
  if (requiredFields.every((field) => field in Object.keys(newItem))) {
    return res
      .status(400)
      .send({ message: `Please provide: ${requiredFields.join(", ")}` });
  }

  const lessonItem = await LessonItem.findById(newItem._id);
  // Ensure item exists
  if (!lessonItem) {
    return res.status(404).send();
  }

  // Ensure lesson id does not change. Not supported
  if (!lessonItem.lessonId.equals(newItem.lessonId)) {
    return res.status(400).send({ message: "Cannot change lesson id" });
  }

  // Ensure type does not change. Not supported
  if (lessonItem.type !== newItem.type) {
    return res.status(400).send({ message: "Cannot change type" });
  }

  const lesson = await Lesson.findById(newItem.lessonId);
  // Ensure the lesson exists
  if (!lesson) {
    return res.status(404).send({ message: "Lesson not found" });
  }

  // Ensure the index is within bounds
  if (newItem.index >= lesson.items.length) {
    return res.status(400).send({ message: "Index out of bounds" });
  }

  try {
    const updatedItem = await LessonItem.findByIdAndUpdate(
      newItem._id,
      newItem
    );
    res.status(200).send({ data: updatedItem });
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
};
