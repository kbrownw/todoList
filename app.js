const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, itemArray: items });
});

app.post("/", function (req, res) {
  let item = req.body.additem;

  items.push(item);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
