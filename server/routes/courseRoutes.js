const express = require("express");
const courseRoutes = express.Router();

const { joinCourse, leaveCourse } = require("../controllers/courseController");

courseRoutes.get("/courses")
courseRoutes.put("/courses/joinCourse", joinCourse);
courseRoutes.put("/courses/leaveCourse", leaveCourse);

module.exports = courseRoutes;