const express = require("express");
const studioRouter = express.Router();

studioRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the studios to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the studio: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /studios");
  })
  .delete((req, res) => {
    res.end("Deleting all studios");
  });

studioRouter
  .route("/:studioId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Will send details of the studio: ${req.params.studioId} to you`);
  })
  .post((req, res) => {
    res.end(`POST operation not supported on /studios/${req.params.studioId}`);
  })
  .put((req, res) => {
    res.write(`Updating the studio: ${req.params.studioId}\n`);
    res.end(`Will update the studio: ${req.body.name}
        with description: ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end(`Deleting studio: ${req.params.studioId}`);
  });

module.exports = studioRouter;
