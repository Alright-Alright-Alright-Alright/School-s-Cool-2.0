const express = require("express");
const userRoutes = express.Router();
const { fileUpload, files } = require("../middleware/uploadFilesMiddleware");

const {
  getUser,
  updateUser,
  followUser,
  unfollowUser,
  deleteUser,
  getAllUsers
} = require("../controllers/userControllers");
const {jwtAuthorization} = require("../middleware/JWTmiddleware");

//pass on controllers
userRoutes.get("/profile/:userid", getUser);
userRoutes.put("/profile/:userid", updateUser);
userRoutes.put("/:userid/follow", followUser)
userRoutes.put("/:userid/unfollow", unfollowUser)
userRoutes.post("/upload", files, fileUpload);
userRoutes.delete("/profile/:userid/delete", deleteUser);
userRoutes.get("/users", getAllUsers);


module.exports = userRoutes;
