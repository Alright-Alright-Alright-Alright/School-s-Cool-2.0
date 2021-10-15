const User = require("../models/User-model");
const bcrypt = require("bcryptjs");
const passport = require("passport");

// Register
exports.register = (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (result) {
    res.status(400).json({ message: "Email is not in system" });
    return;
  }

  if (isEmpty(email)) {
    res.status(400).json({ message: "Email must not be empty" });
  } else if (!isEmail(email)) {
    res.status(400).json({ message: "Please provide a valid email adress" });
  }

  if (isEmpty(password)) {
    res.status(400).json({ message: "Password must not be empty" });
  } else if (password.length < 6) {
    res
      .status(400)
      .json({ message: "Password must have at least 6 characters" });
  }

  User.findOne({ email }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "Username check went bad." });
      return;
    }

    if (foundUser) {
      res.status(400).json({ message: "This email is already taken" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPass,
    });

    newUser.save((err) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .json({ message: "Saving user to database went wrong." });
        return;
      }

      res.status(200).json(newUser);
    });
  });
};

// Login 
exports.login = (req, res) => {
  const { email, password } = req.body;

  if (isEmpty(email)) {
    res.status(400).json({ message: "Email must not be empty" });
  }

  if (isEmpty(password)) {
    res.status(400).json({ message: "Password must not be empty" });
  }

  passport.authenticate("local", (err, user, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!user) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(user, (err) => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }
      res.status(200).json(user);
    });
  })(req, res);
};

// Keep user logged in
exports.loggedIn = (req, res) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
};

// logout
exports.logout = (req, res) => {
  req.logout();
  res.status(200).json({ message: "Log out success!" });
};
