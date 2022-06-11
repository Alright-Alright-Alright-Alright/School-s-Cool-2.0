const express = require("express");
const courseRoutes = express.Router();

const {
  createLesson,
  deleteLesson,
  getLesson,
} = require("../controllers/lessonController");

courseRoutes.route("/lessons").post(createLesson);
courseRoutes.route("/lessons/:id").delete(deleteLesson).get(getLesson);

module.exports = courseRoutes;
