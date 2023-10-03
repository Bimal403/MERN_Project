const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("hi");
});
app.get("/about", (req, res) => {
  res.json({
    meta: null,
    msg: "hi",
  });
});
app.get("/user/:userId", (req, res) => {
  let userId = req.params.userId;
  res.send(userId);
});
module.exports = app;
