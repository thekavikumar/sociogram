var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3001, function () {
  console.log("Backend listening at http://localhost:3001");
});
