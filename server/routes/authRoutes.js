const express = require("express");
const authRoutes = express.Router();

const {
  register,
  login,
  forgetPassword,
  newPassword,
} = require("../controllers/authControllers");

//pass on controllers
authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post("/forgot", forgetPassword);
authRoutes.post("/new-password/:token", newPassword);

module.exports = authRoutes;
