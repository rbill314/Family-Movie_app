"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

const apiRoutes = require("./routes/api.js");

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

require("./db-connection");
const { connection } = require("./db-connection");

app.use("/public", express.static(process.cwd() + "/public"));

app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

apiRoutes(app);

app.use(function (req, res, next) {
  res.status(200).type("text").send("Not Found");
});

app.listen(connection, () => {
  console.log("Holy Crap! It Connected");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Shhhhh!!!! Spying on port " + process.env.PORT);
});
