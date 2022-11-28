var createError = require("http-errors");
var express = require("express");
var path = require("path");
const logger = require("morgan");
const gameRouter = require("./routes/gameRouter");
//const artistRouter = require("./routes/promotionRouter");
//const studioRouter = require("./routes/partnerRouter");

const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/nucampsite";
const connect = mongoose.connect(url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(logger("dev"));
app.use(express.json());

app.use("/games", gameRouter);
//app.use("/artists", artistRouter);
//app.use("/studios", studioRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
