const express = require("express");
const authRoutes = express.Router();

const {
  register,
  login,
  loggedIn,
  logout,
} = require("../controllers/authControllers");

//pass on controllers
authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.get("/loggedIn", loggedIn);
authRoutes.post("/logout", logout);

module.exports = authRoutes;
