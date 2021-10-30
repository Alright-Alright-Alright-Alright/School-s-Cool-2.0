const express = require("express");
const topicRoutes = express.Router();

topicRoutes.get("/topics", (req, res) => {
    res.json({message: "hello"})
});


module.exports = topicRoutes;

