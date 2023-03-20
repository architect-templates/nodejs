const express = require("express");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const path = require("path");
require("dotenv").config();

const itemController = require("./controller/item.controller");

const app = express();
const port = process.env.PORT || 3000;

app.set("port", process.env.PORT || 5000);
app.use(express.static(__dirname + "/public"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.set("views", __dirname + "/public");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.render("index.html");
});

app.get("/api/item", (_, res) => {
  itemController.getItems().then((data) => res.json(data));
});

app.post("/api/item", (req, res) => {
  itemController.createItem(req.body.item).then((data) => res.json(data));
});

app.listen(port, () => {
  console.log(`> Listening on port ${port}`);
});
