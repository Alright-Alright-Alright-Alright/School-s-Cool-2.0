const Course = require("../models/course");
const CourseProgress = require("../models/courseProgress");
const { uploadFile } = require("../configs/S3");

const createCourse = async (req, res, next) => {
  const user = req.user.userLogedIn;
  const { title, description } = req.body;
  const file = req.files.imageUrl; // Plural 'files'... but its always one file..

  if (!title || !description || !file) {
    return res
      .status(400)
      .send({ message: "Please provide: title, description, imageUrl" });
  }

  file.path = file.tempFilePath;
  file.originalname = file.name;
  const imageUrl = await uploadFile(file);

  try {
    const course = {
      title,
      description,
      likes: [],
      comments: [],
      imageUrl: imageUrl.Location,
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
  const userId = req.user.userLogedIn;

  try {
    // Find all available courses
    const courses = await Course.find();

    res.status(200).send({ data: courses });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

const getCourseOverview = async (req, res, next) => {
  const userId = req.user.userLogedIn;

  try {
    // Find all available courses
    const courses = await Course.find();

    // Add course progress to each course
    const courseOverview = [];
    for await (const course of courses) {
      const progress = await CourseProgress.findOne({
        user: userId,
        course: course._id,
      });
      const members = (await CourseProgress.find({ course: course._id }))
        .length;
      courseOverview.push({
        ...course.toObject(),
        started: progress?.started || false,
        progress,
        members,
      });
    }

    res.status(200).send({ data: courseOverview });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

// Get a specific course, with details about the user's progress in the lessons
const getCourse = async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send({ message: "Please provide: id" });
  }

  try {
    // Get the course and its corresponding lessons
    const course = await Course.findOne({ _id: id }).populate("lessons");

    // Check if user has joined this course
    const courseProgress =
      (await CourseProgress.findOne({
        course: course._id,
        user: req.user.userLogedIn,
      })) || null;
    const started = !!courseProgress;

    // Combine data and metadata
    const data = { ...course.toObject(), progress: courseProgress, started };

    res.status(200).send({ data });
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
  const userId = req.user.userLogedIn;

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
      user: userId,
    });
    if (courseProgress) {
      return res
        .status(400)
        .send({ message: "User has already enrolled in this course" });
    }

    // Create the attempt
    const attempt = await CourseProgress.create({
      user: userId,
      course: req.params.courseId,
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
  getCourseOverview,
};
