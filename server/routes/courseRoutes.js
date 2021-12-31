const express = require("express");
const courseRoutes = express.Router();

const { joinCourse, leaveCourse, } = require("../controllers/courseController");


courseRoutes.put("/joinCourse", joinCourse);
courseRoutes.put("/leaveCourse", leaveCourse);

module.exports = courseRoutes;