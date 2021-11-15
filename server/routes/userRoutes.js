const express = require("express");
const userRoutes = express.Router();
const { fileUpload, files } = require("../middleware/uploadFilesMiddleware");

const {
  getUser,
  updateUser,
  followUser,
  deleteUser,
} = require("../controllers/userControllers");
const {jwtAuthorization} = require("../middleware/JWTmiddleware");

//pass on controllers
userRoutes.get("/profile/:userid", jwtAuthorization, getUser);
userRoutes.put("/profile/:userid", jwtAuthorization, updateUser);
userRoutes.put("/:userid/follow", jwtAuthorization, followUser)
userRoutes.post("/upload", files, fileUpload);
userRoutes.delete("/profile/:userid/delete", jwtAuthorization, deleteUser);

module.exports = userRoutes;
