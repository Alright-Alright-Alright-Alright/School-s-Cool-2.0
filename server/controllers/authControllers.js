const { isEmail, isEmpty } = require("../middleware/authMiddlewareValidators");
const { newUser, forgetPasswordService } = require("../services/authServices");
const passport = require("passport");
const JWT = require("jsonwebtoken");

// Register
exports.register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (isEmpty(email, firstName, lastName, password)) {
    res
      .status(400)
      .json({ message: "Please fill in all the required fields!" });
    return;
  }
  if (!isEmail(email)) {
    res.status(400).json({ message: "Please provide a valid email adress" });
    return;
  }

  if (password.length < 6) {
    res
      .status(400)
      .json({ message: "Password must have at least 6 characters" });
    return;
  }

  try {
    await newUser(firstName, lastName, email, password);
    res.status(200).json({ message: "Registration sucessfull, please login" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  if (isEmpty(email)) {
    res.status(400).json({ message: "Email must not be empty" });
    return;
  }

  if (isEmpty(password)) {
    res.status(400).json({ message: "Password must not be empty" });
    return;
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
      const userLogedIn = { _id: user._id };
      const accessToken = JWT.sign(
        { userLogedIn },
        process.env.JWT_SECRETORKEY,
        { expiresIn: "1h" }
      );
      res.status(200).json({ user, accessToken });
    });
  })(req, res);
};

// Keep user logged in
exports.loggedIn = (req, res) => {
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

// Forget password
exports.forgetPassword = async (req, res) => {
  try {
    const email = req.body.email;
    await forgetPasswordService(email);
    res.json({ message: "Check your email buddy" });
  } catch (error) {
    res.status(422).json({ message: error });
  }
};
