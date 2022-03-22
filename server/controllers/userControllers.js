const {
  getTheUser,
  updateTheUser,
  deleteTheUser,
  followTheUser,
  getAllTheUsers
} = require("../services/userServices");

exports.getUser = async (req, res) => {
  const { userid } = req.params;
  try {
    let user = await getTheUser(userid);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message:
        "We can not find you. Please, make sure you are registered and logged in.",
    });
  }
};

exports.updateUser = async (req, res) => {
  const { userid } = req.params;
  const { firstName, lastName, email, imageUrl, role } = req.body;
  let password = req.body.password;

  try {
    const updatedUser = await updateTheUser(userid, firstName, lastName, email, imageUrl, role, password);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong updating the user" });
  }
};

exports.followUser = async (req, res) => {
  let theUser = req.user.userLogedIn
  let userToFollow = req.params.userid
  try {
    await followTheUser(theUser,userToFollow)
    res.status(200).json({ message: "Successfully followed the user" })
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

exports.getAllUsers = async (req, res) => {
  try {
    let users = await getAllTheUsers();
    res.status(200).json({ message: "Here's the users", users });
  } catch (error) {
    res.status(500).json({
      message:
        "We can not find you. Please, make sure you are registered and logged in.",
    });
  }
}