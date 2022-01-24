const Pusher = require("pusher");
const express = require("express");
const chatRoutes = express.Router();

const pusher = new Pusher({
  appId: "1336440",
  key: "9c1aa92fafb85a22cab5",
  secret: "dfe777acb73779f10b5d",
  cluster: "eu",
  encrypted: true,
});

chatRoutes.post("/message", (req, res) => {
    console.log(req.body)
  const payload = req.body;
  pusher.trigger("chat", "message", payload);
  res.send(payload);
});

module.exports = chatRoutes;
