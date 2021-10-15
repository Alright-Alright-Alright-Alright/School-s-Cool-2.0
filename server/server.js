require("dotenv").config()

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path')

// MongoDB connection =====================================

mongoose
  .connect(process.env.DATABASE_URL)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

app.use(express.json());

// auth ================================
const passport = require("passport");
const session = require("express-session");
require("./configs/passport");

// auth session =============================
app.use(
  session({
    secret: "ironducks jumping through the mountains",
    saveUninitialized: true,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000000,
    },
    ttl: 60 * 60 * 24,
    rolling: true //session gets refreshed
  })
);
app.set("trust proxy", 1); // trust first proxy

app.use(passport.initialize());
app.use(passport.session());

// ==========================================

app.use(
  cors({
    credentials: true,
    origin: [process.env.CORS_ALLOWED], // <== this will be the URL of our React app (it will be running on port 3000)
  })
);

//routes
// ==========================================


//Server =====================================
const Server = app.listen(process.env.PORT, () =>
  console.log(`Server started at port: ${process.env.PORT}`)
);

