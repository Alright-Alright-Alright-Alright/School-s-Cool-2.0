const express = require("express");
const libraryRoutes = express.Router();
const { files, fileUpload } = require("../middleware/uploadFilesMiddleware");
const {
  addFile,
  userLibrary,
  getLibrary,
  deleteFile,
  addLike,
  pullLike
} = require("../controllers/libraryControllers");

libraryRoutes.post("/file-upload", files, fileUpload);
libraryRoutes.post("/library/add-file", addFile);
libraryRoutes.get("/library-user", userLibrary);
libraryRoutes.get("/library", getLibrary);
libraryRoutes.put("/library/:fileId/liked", addLike);
libraryRoutes.put("/library/:fileId/unliked", pullLike);
libraryRoutes.put("/library-delete", deleteFile);

module.exports = libraryRoutes;
