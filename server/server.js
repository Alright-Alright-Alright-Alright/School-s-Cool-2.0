require("dotenv").config();
const { jwtAuthorization } = require("./middleware/JWTmiddleware");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

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
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
      secure: false,
      maxAge: 3600000, //1 hour
    },
    rolling: false, //session gets refreshed
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
const authRoutes = require("./routes/authRoutes");
app.use("/api", authRoutes);

const activityRoutes = require("./routes/activityRoutes");
app.use("/api", jwtAuthorization, activityRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api", jwtAuthorization, userRoutes);

const eventRoutes = require("./routes/eventRoutes");
app.use("/api", jwtAuthorization, eventRoutes);

const libraryRoutes = require("./routes/libraryRoutes");
app.use("/api", jwtAuthorization, libraryRoutes);

const topicRoutes = require("./routes/topicRoutes");
app.use("/api", jwtAuthorization, topicRoutes);

const postRoutes = require("./routes/postRoutes");
app.use("/api", jwtAuthorization, postRoutes);

const commentRoutes = require("./routes/commentRoutes");
app.use("/api", jwtAuthorization, commentRoutes);

const courseRoutes = require("./routes/courseRoutes");
app.use("/api", jwtAuthorization, courseRoutes);

const chatRoutes = require("./routes/chatRoutes");
app.use("/api", jwtAuthorization, chatRoutes);

//Server =====================================
app.listen(process.env.PORT, () =>
  console.log(`Server started at port: ${process.env.PORT}`)
);
