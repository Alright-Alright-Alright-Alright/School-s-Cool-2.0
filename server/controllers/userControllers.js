const {
  getTheUser,
  updateTheUser,
  deleteTheUser,
  followTheUser
} = require("../services/userServices");

exports.getUser = async (req, res) => {
  const { userid } = req.params;
  try {
    let user = await getTheUser(userid);
    res.status(200).json({ message: "Here's the user", user });
  } catch (error) {
    res.status(500).json({
      message:
        "We can not find you. Please, make sure you are registered and logged in.",
    });
  }
};

exports.updateUser = async (req, res) => {
  const { userid } = req.params;
  const { firstName, lastName, email, imageUrl } = req.body;
  let password = req.body.password;
  try {
    await updateTheUser(userid, firstName, lastName, email, imageUrl, password);
    res.status(200).json({ message: `User ${userid} has been updated` });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong updating the user" });
  }
};

exports.followUser = async (req, res) => {
  let theUser = req.body.userid
  let userToFollow = req.params.userid
  try {
    await followTheUser(theUser,userToFollow)
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.deleteUser = async (req, res) => {
  const { userid } = req.params;
  try {
    await deleteTheUser(userid);
    res.status(200).json({ message: "User has been deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong deleting this user" });
  }
};
