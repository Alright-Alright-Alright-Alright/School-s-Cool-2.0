const express = require("express");
const userRoutes = express.Router();
const files = require("../middleware/uploadFilesMiddleware");
const fileUpload = require("../controllers/uploadFilesController");

const {
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

//pass on controllers
userRoutes.get("/profile/:userid", getUser);
userRoutes.put("/profile/:userid", updateUser);
userRoutes.post("/upload", files, fileUpload);
userRoutes.delete("/profile/:userid/delete", deleteUser);

module.exports = userRoutes;
