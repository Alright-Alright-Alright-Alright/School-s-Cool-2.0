const express = require("express");
const courseRoutes = express.Router();

const {
  joinCourse,
  leaveCourse,
  createCourse,
  getCourses,
  deleteCourse,
  getCourse,
} = require("../controllers/courseController");

courseRoutes.get("/courses");
courseRoutes.put("/courses/joinCourse", joinCourse);
courseRoutes.put("/courses/leaveCourse", leaveCourse);
courseRoutes.route("/courses").post(createCourse).get(getCourses);
courseRoutes.route("/courses/:id").get(getCourse).delete(deleteCourse);

module.exports = courseRoutes;
