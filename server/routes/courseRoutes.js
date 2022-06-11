const express = require("express");
const courseRoutes = express.Router();

const {
  createCourse,
  getCourses,
  deleteCourse,
  getCourse,
  startcourse,
} = require("../controllers/courseController");

courseRoutes.get("/courses");
courseRoutes.route("/courses").post(createCourse).get(getCourses);
courseRoutes.route("/courses/:id").get(getCourse).delete(deleteCourse);
courseRoutes.route("/courses/:courseId/start").post(startcourse);

module.exports = courseRoutes;
