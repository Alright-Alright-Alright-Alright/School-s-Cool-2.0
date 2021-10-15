const express = require("express");
const authRoutes = express.Router();

const {
  register,
  login,
  loggedIn,
  logout,
} = require("../controllers/authControllers");

const {
    isEmail,
    isEmpty,
  } = require("../validators/authValidators");

//pass on controllers
authRoutes.post("/register", register, isEmail, isEmpty);
authRoutes.post("/login", login);
authRoutes.get("/loggedIn", loggedIn);
authRoutes.get("/logout", logout);
