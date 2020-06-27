var express = require("express");
var app = express();
var router = require("./router.js");


//解决跨域
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );

  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});

app.use("/api", router);

app.listen(3003, function () {
  console.log("服务器(端口：3003)连接成功...");
});
