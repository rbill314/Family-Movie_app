const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    required: true
  },
  movie: {
    type: String,
    required: true
  },
  where: {
    type: String,
    required: true
  },
  watched: {
    type: Boolean,
    require: true
  }
})

const MoviesTest = mongoose.model("MoviesTest", movieSchema);

exports.MoviesTest = MoviesTest