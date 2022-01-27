const express = require("express");
const authRoutes = express.Router();

const {
  register,
  login,
  loggedIn,
  logout,
  forgetPassword
} = require("../controllers/authControllers");

//pass on controllers
authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.get("/loggedIn", loggedIn);
authRoutes.post("/logout", logout);
authRoutes.post("/forgot", forgetPassword)
authRoutes.post('/new-password',)

module.exports = authRoutes;
