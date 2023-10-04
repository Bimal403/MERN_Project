const express = require("express");
const app = express();
const router = require("../router");

app.use("/api/v1", router);
app.use("/health", (req, res, next) => {
  res.send("Health Ok");
});

module.exports = app;
