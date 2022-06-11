const Lesson = require("../models/lesson");
const LessonItem = require("../models/item");

const createItem = async (req, res, next) => {
  const { lessonId, type, content, index } = req.body;

  if (!lessonId || !type || !content) {
    return res
      .status(400)
      .send({ message: "Please provide: lessonId, type, content" });
  }

  try {
    const item = {
      lessonId,
      type,
      content,
      index,
    };

    const createdItem = await LessonItem.create(item);
    // Add the created item to the lesson
    await Lesson.updateOne(
      {
        _id: lessonId,
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

module.exports = {
  createItem,
  deleteItem,
  getItem,
};
