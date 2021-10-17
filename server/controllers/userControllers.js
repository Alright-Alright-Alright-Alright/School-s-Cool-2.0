const User = require("../models/User-model");
const bcrypt = require("bcryptjs");

exports.getUser = (req, res) => {
  const { userid } = req.params;
  User.findById(userid)
    .then((foundUser) => {
      res.status(200).json(foundUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "we can't find that user" });
    });
};

exports.updateUser = (req, res) => {
  const { userid } = req.params;
  const { firstName, lastName, email, imageUrl } = req.body;
  let password = req.body.password;
  let newPassword = null;

  User.findById(userid)
    .then((user) => {
      if (user.password !== password) {
        const salt = bcrypt.genSaltSync(10);
        newPassword = bcrypt.hashSync(password, salt);

        password = newPassword;
      }
      return password;
    })
    .then((password) => {
      User.findByIdAndUpdate(
        userid,
        {
          firstName,
          lastName,
          email,
          imageUrl,
          password,
        },
        { new: true }
      )
        .then((response) => {
          console.log("response after update", response);
          res.status(200).json({ message: `User ${userid} has been updated` });
        })
        .catch((err) => {
          console.log(err);
          res
            .status(500)
            .json({ message: "Something went wrong updating the user" });
        });
    });
};

exports.deleteUser = (req, res) => {
  const { userid } = req.params;

  User.findByIdAndDelete(userid)
    .then(() => {
      res.status(200).json({ message: "User has been deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something went wrong deleting this user" });
    });
};
