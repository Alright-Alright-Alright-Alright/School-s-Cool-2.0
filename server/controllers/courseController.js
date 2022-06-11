const {
  joinCourseService,
  leaveCourseService,
} = require("../services/courseService");
const Course = require("../models/course");

const joinCourse = async (req, res, next) => {
  const user = req.user.userLogedIn;
  const courseId = req.body.courseId;
  try {
    let updatedUser = await joinCourseService(courseId, user);
    return res.status(201).json(updatedUser);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

const leaveCourse = async (req, res, next) => {
  const user = req.user.userLogedIn;
  const courseId = req.body.courseId;
  try {
    let updatedUser = await leaveCourseService(courseId, user);
    return res.status(201).json(updatedUser);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
};

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
    const course = await Course.findById(id);
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

module.exports = {
  joinCourse,
  leaveCourse,
  createCourse,
  getCourses,
  deleteCourse,
  getCourse,
};
