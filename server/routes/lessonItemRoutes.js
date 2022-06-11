const express = require("express");
const lessonItemRoutes = express.Router();

const {
  createItem,
  deleteItem,
  getItem,
} = require("../controllers/lessonItemController");

lessonItemRoutes.route("/lessonItems/:id").get(getItem).delete(deleteItem);
lessonItemRoutes.route("/lessonItems").post(createItem);

module.exports = lessonItemRoutes;
