const express = require("express");
const { getStreamToken } = require("../services/chatService");
const chatRoutes = express.Router();
const StreamChat = require('stream-chat').StreamChat;
const serverClient = new StreamChat('4gr5arqkjs4r', '5dpccfj7jv95896werua9rdujcyaqfn3pyj5452emvgeunfjewngvu57z3a37bwn');


chatRoutes.post('/token', (req, res) => {
//   const { username } = req.query;
    const { username } = req.body;
    console.log(username)
  if (username) {
    const token = serverClient.createToken(username);
    console.log(token)
    res.status(200).json({ token, status: 'sucess' });
  } else {
    res.status(401).json({ message: 'invalid request', status: 'error' });
  }
});

chatRoutes.post('/getStreamToken', async (req, res, next) => {
 const { userId } = req.body;
  try {
    const token = await getStreamToken(userId);
    return res.status(201).json(token);
  } catch (e) {
    res.status(500).json({ message: e.message }) && next(e);
  }
});


module.exports = chatRoutes;
