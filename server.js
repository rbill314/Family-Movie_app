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


const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  movie: String
});

const User = mongoose.model("User", userSchema, 'User');

async function run() {
  
User.watch().
    on('change', data => console.log(new Date(), data));
  console.log(new Date(), 'Inserting doc');
  await User.create({});
}

app.post("/api/movies", (req, res) => {
  let name = req.body.name;
  let movie = req.body.movie;
  User.findOne({ movie: movie }, (err, found) => {
    if (err) return;
    if (found) {
      res.send("Movie Already Entered");
    } else {
      const newUser = new User({
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
  User.find({}, "name movie", (err, users) => {
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
