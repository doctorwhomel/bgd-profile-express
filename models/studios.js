const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Game = require("./game");

const studioSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  games: {
    type: [Game],
  },
});
