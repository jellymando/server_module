var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();

app.use(cookieParser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", function (req, res) {
  if (req.cookies.auth) {
    res.send("<h1>Login Success</h1>");
  } else {
    res.redirect("/login");
  }
});

app.get("/login", function (req, res) {
  fs.readFile("login.html", function (error, data) {
    res.send(data.toString());
  });
});

app.post("/login", function (req, res) {
  const { userId, userPw } = req.body;

  if (userId == "dikang" && userPw === "1016") {
    res.cookie("auth", true);
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
});

app.listen(3030);
