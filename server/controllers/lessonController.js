const Lesson = require("../models/lesson");
const Course = require("../models/course");

const createLesson = async (req, res, next) => {
  const { courseId, title, description } = req.body;

  if (!title || !description || !courseId) {
    return res
      .status(400)
      .send({ message: "Please provide: title, description, courseId" });
  }

  try {
    const lesson = {
      title,
      description,
      courseId,
      items: [],
    };

    const createdLesson = await Lesson.create(lesson);
    // Add the created lesson to the course to build the relation
    await Course.updateOne(
      {
        _id: courseId,
      },
      {
        $push: {
          lessons: createdLesson.id,
        },
      }
    );

    res.status(200).send({ data: createdLesson._id });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

const deleteLesson = async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send({ message: "Please provide: id" });
  }

  try {
    const lesson = await Lesson.findById(id);
    await lesson.deleteOne();

    res.status(200).send({ message: "DELETED" });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

const getLesson = async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send({ message: "Please provide: id" });
  }

  try {
    const lesson = await Lesson.findById(id);
    res.status(200).send({ data: lesson });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

module.exports = {
  createLesson,
  deleteLesson,
  getLesson,
};
