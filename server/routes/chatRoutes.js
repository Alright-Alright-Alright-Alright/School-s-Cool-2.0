const express = require("express");
const chatRoutes = express.Router();
const StreamChat = require("stream-chat").StreamChat;
const serverClient = new StreamChat(
  "4gr5arqkjs4r",
  "5dpccfj7jv95896werua9rdujcyaqfn3pyj5452emvgeunfjewngvu57z3a37bwn"
);

chatRoutes.post("/token", (req, res) => {
  //   const { username } = req.query;
  const { username } = req.body;
  if (username) {
    const token = serverClient.createToken(username);
    res.status(200).json({ token, status: "sucess" });
  } else {
    res.status(401).json({ message: "invalid request", status: "error" });
  }
});

module.exports = chatRoutes;
