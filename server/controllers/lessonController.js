const Lesson = require("../models/lesson");
const Course = require("../models/course");
const CourseProgress = require("../models/courseProgress");
const LessonProgress = require("../models/lessonProgress");

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
    const lesson = await Lesson.findById(id).populate("items");
    res.status(200).send({ data: lesson });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

const startLesson = async (req, res, next) => {
  const user = req.user.userLogedIn;

  // Ensure all fields are present
  const requiredParams = ["lessonId"];
  if (requiredParams.every((field) => field in Object.keys(req.params))) {
    return res
      .status(400)
      .send({ message: `Please provide: ${requiredParams.join(", ")}` });
  }

  try {
    // Gather some prerequisites
    const lesson = await Lesson.findById(req.params.lessonId);
    if (!lesson) {
      return res.status(404).send({ message: "Lesson not found" });
    }

    const course = await Course.findById(lesson.courseId);
    if (!course) {
      return res.status(404).send({ message: "Course not found" });
    }

    // Make sure the user has started the course
    const courseProgress = await CourseProgress.findOne({
      courseId: course.id,
      userId: user._id,
    });

    if (!courseProgress) {
      return res
        .status(400)
        .send({ message: "Must enroll in course before starting a lesson" });
    }

    // Make sure there is not already an attempt
    const lessonProgress = await LessonProgress.findOne({
      lessonId: req.params.lessonid,
      userId: user._id,
    });
    if (lessonProgress) {
      return res
        .status(400)
        .send({ message: "User has already started this lesson" });
    }

    // Create the attempt
    const attempt = await LessonProgress.create({
      userId: user._id,
      courseProgressId: courseProgress._id,
      started: true,
      completed: false,
      currentItem: lesson.items.find((item) => item.index === 0), // Set current item to the first item in the lesson
    });

    res.status(200).send({ data: attempt });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

module.exports = {
  createLesson,
  deleteLesson,
  getLesson,
  startLesson,
};
