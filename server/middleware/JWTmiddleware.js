const JWT = require("jsonwebtoken");

exports.jwtAuthorization = (req, res, next) => {
  const authHeader = req.headers["x-auth-token"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null)
    return res.sendStatus(401);

  JWT.verify(token, process.env.JWT_SECRETORKEY, (err, user) => {
    if (err) return res.status(401).send("Not Authorized!");
    req.user = user;
    next();
  });
};
