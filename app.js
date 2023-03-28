const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
  let today = new Date();

  if (today.getDay() === 6 || today.getDay() === 0) {
    res.send("Hope you're having a good weekend!");
  } else {
    res.send("Here's hoping the work week goes quickly for you!");
  }
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
