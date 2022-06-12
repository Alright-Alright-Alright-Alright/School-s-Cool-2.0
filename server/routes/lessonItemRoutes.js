const express = require("express");
const lessonItemRoutes = express.Router();

const {
  createItem,
  deleteItem,
  getItem,
  updateItem,
  submitItem,
} = require("../controllers/lessonItemController");

lessonItemRoutes.route("/lessonItems/:id").get(getItem).delete(deleteItem);
lessonItemRoutes.route("/lessonItems/submit").post(submitItem);
lessonItemRoutes.route("/lessonItems").post(createItem).put(updateItem);

module.exports = lessonItemRoutes;
