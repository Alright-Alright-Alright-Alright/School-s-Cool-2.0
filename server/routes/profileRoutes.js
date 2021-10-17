const express = require("express");
const profileRoutes = express.Router();
const files = require("../middleware/uploadFilesMiddleware");
const fileUpload = require("../controllers/uploadFilesController");

const {
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/profileControllers");

//pass on controllers
profileRoutes.get("/profile/:userid", getUser);
profileRoutes.post("/profile/:userid", updateUser);
profileRoutes.post("/upload", files, fileUpload);
profileRoutes.get("/profile/:userid/delete", deleteUser);

module.exports = profileRoutes;
