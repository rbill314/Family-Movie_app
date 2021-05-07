const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect(process.env.URI, {
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
  
  _id: { type: String, required: true, default: shortId.generate },
  name: { type: String, required: true },
  movie: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

app.post("/api/users", (req, res) => {
  const movie = req.body.movie;
  
  User.findOne({ movie: movie }, (err, found) => {
    if (err) return;
    if (found) {
      res.send("Movie Taken");
    } else {
      const newUser = new User({        
        movie: movie
      });
      newUser.save((err, save) => {
        if (err) return;
        res.json({
          movie: movie,
          name: save.name
        });
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
