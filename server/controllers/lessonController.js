const Lesson = require("../models/lesson");
const Course = require("../models/course");
const CourseProgress = require("../models/courseProgress");
const LessonProgress = require("../models/lessonProgress");

const createLesson = async (req, res, next) => {
  // Ensure all fields are present
  const requiredFields = ["title", "description", "courseId"];
  if (requiredFields.every((field) => field in Object.keys(req.body))) {
    return res
      .status(400)
      .send({ message: `Please provide: ${requiredFields.join(", ")}` });
  }

  try {
    const lesson = {
      ...req.body,
      course: req.body.courseId,
      items: [],
    };

    const createdLesson = await Lesson.create(lesson);
    // Add the created lesson to the course to build the relation
    await Course.updateOne(
      {
        _id: lesson.courseId,
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
  // Ensure all fields are present
  const requiredFields = ["id"];
  if (requiredFields.every((field) => field in Object.keys(req.params))) {
    return res
      .status(400)
      .send({ message: `Please provide: ${requiredFields.join(", ")}` });
  }

  try {
    const lesson = await Lesson.findById(req.params.id);
    await lesson.deleteOne();

    res.status(200).send({ message: "DELETED" });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

const getLesson = async (req, res, next) => {
  // Ensure all fields are present
  const requiredFields = ["lessonId"];
  if (requiredFields.every((field) => field in Object.keys(req.params))) {
    return res
      .status(400)
      .send({ message: `Please provide: ${requiredFields.join(", ")}` });
  }

  try {
    const lesson = await Lesson.findById(req.params.lessonId).populate("items");
    res.status(200).send({ data: lesson });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

const startLesson = async (req, res, next) => {
  const userId = req.user.userLogedIn;

  // Ensure all fields are present
  const requiredParams = ["lessonId"];
  if (requiredParams.every((field) => field in Object.keys(req.params))) {
    return res
      .status(400)
      .send({ message: `Please provide: ${requiredParams.join(", ")}` });
  }

  try {
    // Gather some prerequisites
    const lesson = await Lesson.findById(req.params.lessonId).populate(
      "course"
    );
    if (!lesson) {
      return res.status(404).send({ message: "Lesson not found" });
    }

    if (!lesson.course) {
      return res.status(404).send({ message: "Course not found" });
    }

    // Make sure the user has started the course
    const courseProgress = await CourseProgress.findOne({
      courseId: lesson.course._id,
      userId: userId,
    });

    if (!courseProgress) {
      return res
        .status(400)
        .send({ message: "Must enroll in course before starting a lesson" });
    }

    // Make sure there is not already an attempt
    const lessonProgress = await LessonProgress.findOne({
      lesson: req.params.lessonId,
      userId: userId,
    });
    if (lessonProgress) {
      return res
        .status(400)
        .send({ message: "User has already started this lesson" });
    }

    // Create the attempt
    const attempt = await LessonProgress.create({
      userId: userId,
      courseProgress: courseProgress._id,
      lesson: req.params.lessonId,
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
