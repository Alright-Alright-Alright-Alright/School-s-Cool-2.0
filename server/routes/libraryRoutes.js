const express = require("express");
const libraryRoutes = express.Router();
const { files, fileUpload } = require("../middleware/uploadFilesMiddleware");
const {
  addFile,
  userLibrary,
  getLibrary,
  deleteFile,
} = require("../controllers/libraryControllers");
const { jwtAuthorization } = require("../middleware/JWTmiddleware");

libraryRoutes.post("/file-upload", files, fileUpload);
libraryRoutes.post("/add-file", jwtAuthorization, addFile);
libraryRoutes.get("/library-user", jwtAuthorization, userLibrary);
libraryRoutes.get("/library", jwtAuthorization, getLibrary);
libraryRoutes.put("/library-delete", jwtAuthorization, deleteFile);

module.exports = libraryRoutes;
