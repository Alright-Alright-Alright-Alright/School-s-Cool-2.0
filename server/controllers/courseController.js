const Course = require("../models/course");
const CourseProgress = require("../models/courseProgress");

const createCourse = async (req, res, next) => {
  const user = req.user.userLogedIn;
  const { title, description, imageUrl } = req.body;

  if (!title || !description || !imageUrl) {
    return res
      .status(400)
      .send({ message: "Please provide: title, description, imageUrl" });
  }

  try {
    const course = {
      title,
      description,
      likes: [],
      comments: [],
      imageUrl,
      lessons: [],
      members: [],
      creator: user._id,
    };

    const createdCourse = await Course.create(course);
    res.status(200).send({ data: createdCourse._id });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.status(200).send({ data: courses });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

const getCourse = async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send({ message: "Please provide: id" });
  }

  try {
    const course = await Course.findOne({ _id: id }).populate("lessons");
    res.status(200).send({ data: course });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

const deleteCourse = async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send({ message: "Please provide: id" });
  }

  try {
    await Course.deleteOne({ _id: id });
    res.status(200).send({ message: "DELETED" });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

const startcourse = async (req, res, next) => {
  const user = req.user.userLogedIn;

  // Ensure all fields are present
  const requiredParams = ["courseId"];
  if (requiredParams.every((field) => field in Object.keys(req.params))) {
    return res
      .status(400)
      .send({ message: `Please provide: ${requiredParams.join(", ")}` });
  }

  try {
    // Gather some prerequisites
    const course = await Course.findById(req.params.courseId);
    if (!course) {
      return res.status(404).send({ message: "Course not found" });
    }

    // Make sure there is not already an attempt
    const courseProgress = await CourseProgress.findOne({
      courseId: req.params.courseId,
      userId: user._id,
    });
    if (courseProgress) {
      return res
        .status(400)
        .send({ message: "User has already enrolled in this course" });
    }

    // Create the attempt
    const attempt = await CourseProgress.create({
      userId: user._id,
      courseId: req.params.courseId,
      started: true,
      completed: false,
    });

    res.status(200).send({ data: attempt });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

module.exports = {
  createCourse,
  getCourses,
  deleteCourse,
  getCourse,
  startcourse,
};
