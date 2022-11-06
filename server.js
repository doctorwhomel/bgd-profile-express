const express = require("express");
const morgan = require("morgan");
const gameRouter = require("./routes/gameRouter.js");
const artistRouter = require("./routes/artistRouter");
const studioRouter = require("./routes/studioRouter");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/games", gameRouter);
app.use("/artists", artistRouter);
app.use("/studios", studioRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
