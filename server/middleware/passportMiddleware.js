const passport = require("passport");
const JWT = require("jsonwebtoken");

exports.passportAuthenticate = (req, res) => {
  return passport.authenticate("local", (err, user, failureDetails) => {
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
      const userLogedIn = { _id: user._id, email: user.email };
      const accessToken = JWT.sign({userLogedIn}, process.env.JWT_SECRETORKEY, {expiresIn: "1h"});
      res.status(200).json({user, accessToken});
    });
  })(req, res)
}