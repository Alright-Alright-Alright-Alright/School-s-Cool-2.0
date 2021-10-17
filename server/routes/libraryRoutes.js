const express = require("express");
const libraryRoutes = express.Router();
const { fileUpload } = require("../controllers/uploadFilesController");
const { files } = require("../middleware/uploadFilesMiddleware")
const {
  addFile,
  userLibrary,
  getLibrary,
  deleteFile,
} = require("../controllers/libraryControllers");

libraryRoutes.post("/file-upload", files, fileUpload);
libraryRoutes.post("/add-file", addFile);
libraryRoutes.get("/library-user", userLibrary);
libraryRoutes.get("/library", getLibrary);
libraryRoutes.put("/library-delete", deleteFile);

module.exports = libraryRoutes;
