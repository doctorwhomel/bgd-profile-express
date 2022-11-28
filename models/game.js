const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    studio: {
      type: studioSchema,
      required: false,
    },
    contributingArtists: {
      type: [artistSchema],
      required: false,
    },
    images: {
      type: String,
      required: false,
    },
    genres: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
