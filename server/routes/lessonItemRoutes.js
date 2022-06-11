const express = require("express");
const lessonItemRoutes = express.Router();

const {
  createItem,
  deleteItem,
  getItem,
  updateItem,
} = require("../controllers/lessonItemController");

lessonItemRoutes.route("/lessonItems/:id").get(getItem).delete(deleteItem);
lessonItemRoutes.route("/lessonItems").post(createItem).put(updateItem);

module.exports = lessonItemRoutes;
