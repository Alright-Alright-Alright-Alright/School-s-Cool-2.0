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
profileRoutes.put("/profile/:userid", updateUser);
profileRoutes.post("/upload", files, fileUpload);
profileRoutes.delete("/profile/:userid/delete", deleteUser);

module.exports = profileRoutes;
