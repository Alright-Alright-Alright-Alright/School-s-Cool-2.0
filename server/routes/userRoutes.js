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
userRoutes.get("/profile/:userid", getUser);
userRoutes.put("/profile/:userid", updateUser);
userRoutes.put("/:userid/follow", followUser)
userRoutes.post("/upload", files, fileUpload);
userRoutes.delete("/profile/:userid/delete", deleteUser);

module.exports = userRoutes;
