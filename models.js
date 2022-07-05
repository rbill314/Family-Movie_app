const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  movie: {
    type: String,
    required: false,
  },
  where: {
    type: String,
    required: true,
  },
  watched: {
    type: String,
    required: true,
  },
});

const Movies = mongoose.model("Movies", movieSchema);
exports.Movies = Movies;
