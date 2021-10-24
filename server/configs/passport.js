const User = require("../models/User-model");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
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

cookieExtrator = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};

// Authorization
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtrator,
      secretOrKey: process.env.JWT_SECRETORKEY,
    },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }
  )
);

// Authentication
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
