const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [];
let workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { listTitle: day, itemArray: items });
});

app.post("/", function (req, res) {
  let item = req.body.additem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", itemArray: workItems });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
