const express = require("express");
const lessonRoutes = express.Router();

const {
  createLesson,
  deleteLesson,
  getLesson,
  startLesson,
  updateLesson,
} = require("../controllers/lessonController");

lessonRoutes.route("/lessons").post(createLesson);
lessonRoutes.route("/lessons/:lessonId/start").post(startLesson);
lessonRoutes
  .route("/lessons/:lessonId")
  .get(getLesson)
  .post(updateLesson)
  .delete(deleteLesson);

module.exports = lessonRoutes;
