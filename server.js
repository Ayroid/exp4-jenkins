const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
