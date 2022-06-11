const express = require("express");
const lessonRoutes = express.Router();

const {
  createLesson,
  deleteLesson,
  getLesson,
  startLesson,
} = require("../controllers/lessonController");

lessonRoutes.route("/lessons").post(createLesson);
lessonRoutes.route("/lessons/:lessonId/start").post(startLesson);
lessonRoutes.route("/lessons/:id").delete(deleteLesson).get(getLesson);

module.exports = lessonRoutes;
