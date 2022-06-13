const express = require("express");
const lessonRoutes = express.Router();

const {
  createLesson,
  deleteLesson,
  getLesson,
  startLesson,
  putLesson,
} = require("../controllers/lessonController");

lessonRoutes.route("/lessons").post(createLesson).put(putLesson);
lessonRoutes.route("/lessons/:lessonId/start").post(startLesson);
lessonRoutes.route("/lessons/:lessonId").delete(deleteLesson).get(getLesson);

module.exports = lessonRoutes;
