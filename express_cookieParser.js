var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();

app.use(cookieParser());

app.get("/", function (req, res) {
  res.cookie("name", "express").send(req.cookie); //Sets name = express
  console.log("Cookies: ", req.cookies);
});

app.listen(3000);
