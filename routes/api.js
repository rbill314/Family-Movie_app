'use strict'
const Movies = require("../models").Movies

module.exports = (app) => {

  app.route('/api/movies')

    .get((req, res) => {

      Movies.find({}, (err, data) => {
        if (!data) {
          res.json({})
        } else {
          const formatData = data.map((movies) => {
            return {
              name: movies.name,
              movie: movies.movie,
              where: movies.where,
              watched: movies.watched
            }
          })
          res.json(formatData)
        }
      })
    })

    .post((req, res) => {
      let name = req.body.name
      let movie = req.body.movie
      let where = req.body.where
      let watched = req.body.watched

      if (!name || !movie || !where || !watched) {
        res.json("Missing required field dummy")
        return
      }

      Movies.findOne({
        movie: movie
      }, (err, found) => {
        if (err) return
        if (found) {
          res.json("Movie Already In DataBase")          
        } else {
          let newMovie = new Movies({
            name: name,
            movie: movie,
            where: where,
            watched: false
          })
          newMovie.save((err, save) => {
            if (err) return
            if (save) {
              res.redirect("back")
            }
          })
        }
      })
    })
}