require("dotenv").config();
const { jwtAuthorization } = require("./middleware/JWTmiddleware");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

// MongoDB connection =====================================

mongoose
  .connect(process.env.DATABASE_URL)
  .then((x) => {
    console.info(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// auth ================================
app.set("trust proxy", 1); // trust first proxy

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

const lessonRoutes = require("./routes/lessonRoutes");
app.use("/api", jwtAuthorization, lessonRoutes);

const lessonItemRoutes = require("./routes/lessonItemRoutes");
app.use("/api", jwtAuthorization, lessonItemRoutes);

//Server =====================================
app.listen(process.env.PORT, () =>
  console.info(`Server started at port: ${process.env.PORT}`)
);
