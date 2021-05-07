const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

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

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  movie: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

app.post("/api/users", (req, res) => {
  let movie = req.body.movie;
  let name = req.body.name;
  User.findOne({ movie }, (err, found) => {
    if (err) return;
    if (found) {
      res.send("Movie Taken");
    } else {
      let newUser = new User({
        movie,
        name
      });
      newUser.save((err, save) => {
        if (!err) {
          let resObj = {};
          resObj["name"] = save.name;
          resObj["movie"] = save.movie;
          resObj["id"] = save.id;
          res.json(resObj);
        }
      });
    }
  });
});
app.get("/api/users", (req, res) => {
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
