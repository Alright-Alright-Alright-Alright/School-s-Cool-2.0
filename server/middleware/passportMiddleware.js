const passport = require("passport");

exports.passportAuthenticate = (req, res, accessToken) => {
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
      res.status(200).json({user, accessToken});
    });
  })(req, res)
}