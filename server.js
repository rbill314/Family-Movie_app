const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const URI =
  "mongodb+srv://whyme:" +
  process.env.URI +
  "@cluster0.tffyh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

if (mongoose.connection.readyState) {
  console.log("Holy Crap! It Connected");
} else if (!mongoose.connection.readyState) {
  console.log("WHACHA DO!!!");
}


const movieSchema = new mongoose.Schema({
  id: String,
  name: {type: String, required: true},
  movie: {type: String, required: true}
});

const Movies = mongoose.model("Movies", movieSchema);

app.post("/api/movies", (req, res) => {
  let name = req.body.name;
  let movie = req.body.movie;
  Movies.findOne({ movie: movie }, (err, found) => {
    if (err) return;
    if (found) {
      res.send("Movie Already Entered");
    } else {
      const newUser = new Movies({
        name: name,
        movie: movie
      });
      newUser.save((err, save) => {
        if (err) return;
        res.json({
          name: name,
          movie: movie,
          _id: save._id
        });
      });
    }
  });
});

app.get("/api/movies", (req, res) => {
  Movies.find({}, "name movie", (err, users) => {
    let arr = [];
    users.map(user => {
      arr.push(user);
    });
    res.json(arr);
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Shhhhh!!!! Spying on port " + listener.address().port);
});
