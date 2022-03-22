const { isEmail, isEmpty } = require("../middleware/authMiddlewareValidators");
const {
  newUser,
  forgetPasswordService,
  newPasswordService,
  loginUserService,
} = require("../services/authServices");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const { chatSignupToken, chatLoginToken } = require("../services/chatService");
const { zohoCheck } = require("../middleware/zohoMiddleware");
const { jwtAuthorization } = require("../middleware/JWTmiddleware");

// Register
exports.register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // if (zohoCheck(email)) {
  //   res.status(400).json({
  //     message: "This email is not registered in Zoho",
  //   });
  //   return;
  // }

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
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const user = await newUser(firstName, lastName, email, hashedpassword);
    // const chatToken = await chatSignupToken(firstName);

    // await Promise.all({ user, chatToken });
    res.status(201).json({ user });

    // await newUser(firstName, lastName, email, password).chatSignupToken(firstname);
    // res.status(200).json({ message: "Registration sucessfull, please login" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password, remember } = req.body;

    if (!zohoCheck(email)) {
      res.status(400).json({
        message: "This email is not registered in Zoho",
      });
      return;
    }

    if (isEmpty(email)) {
      res.status(400).json({ message: "Email must not be empty" });
      return;
    }

    if (isEmpty(password)) {
      res.status(400).json({ message: "Password must not be empty" });
      return;
    }

    const user = await loginUserService(email, password);
    const userLogedIn = user._id;
    let accessToken;
    if (remember === "yes") {
      accessToken = JWT.sign({ userLogedIn }, process.env.JWT_SECRETORKEY, {
        expiresIn: "7d",
      });
      // console.log('remember for 7 days')
    } else {
      accessToken = JWT.sign({ userLogedIn }, process.env.JWT_SECRETORKEY, {
        expiresIn: "1h",
      });
    }
    res.status(200).json({ user, accessToken });
    // const chatToken = await chatLoginToken(email);
    // console.log(chatToken);
  } catch (error) {
    console.log(error.message);
    res.status(403).json({ message: error.message });
  }
};

// Forget password
exports.forgetPassword = async (req, res) => {
  try {
    const email = req.body.email;
    await forgetPasswordService(email);
    res.json({ message: "Check your email buddy" });
  } catch (error) {
    res.status(422).json({ message: error.message });
  }
};

// New password
exports.newPassword = async (req, res) => {
  try {
    const { newPassword, confirmPassword } = req.body;
    const { token } = req.params;
    if (newPassword !== confirmPassword) {
      throw new Error("Passwords don't match!");
    } else if (newPassword.length < 6) {
      throw new Error("Password must have at least 6 characters");
    } else {
      await newPasswordService(newPassword, token);
      res.status(200).json({ message: "password updated with success" });
    }
  } catch (error) {
    res.status(422).json({ message: error.message });
  }
};
