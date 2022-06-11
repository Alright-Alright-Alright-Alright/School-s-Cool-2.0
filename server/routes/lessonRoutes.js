const express = require("express");
const courseRoutes = express.Router();

const {
  createLesson,
  deleteLesson,
} = require("../controllers/lessonController");

courseRoutes.route("/lessons").post(createLesson);
courseRoutes.route("/lessons/:id").delete(deleteLesson);

module.exports = courseRoutes;
