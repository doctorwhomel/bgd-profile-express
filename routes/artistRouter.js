const express = require("express");
const artistRouter = express.Router();

artistRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the artists to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the artist: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /artists");
  })
  .delete((req, res) => {
    res.end("Deleting all artists");
  });

artistRouter
  .route("/:artistId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Will send details of the artist: ${req.params.artistId} to you`);
  })
  .post((req, res) => {
    res.end(`POST operation not supported on /artists/${req.params.artistId}`);
  })
  .put((req, res) => {
    res.write(`Updating the artist: ${req.params.artistId}\n`);
    res.end(`Will update the artist: ${req.body.name}
        with description: ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end(`Deleting artist: ${req.params.artistId}`);
  });

module.exports = artistRouter;
