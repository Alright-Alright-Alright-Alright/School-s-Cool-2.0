const User = require("../models/User-model");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const passport = require("passport");

passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession, (err, userDocument) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, userDocument);
  });
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    User.findOne({ email }, (err, foundUser) => {
      if (err) {
        return done(err);
      }

      if (!foundUser) {
        return done(null, false, { message: "Email does not exists." });
      }

      if (!bcrypt.compareSync(password, foundUser.password)) {
        return done(null, false, { message: "Incorrect password." });
      }

      done(null, foundUser);
    });
  })
);
