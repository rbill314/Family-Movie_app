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
  let newUser = new User({
    name: req.body.name,
    movie: req.body.movie
  })
  newUser.save((error, savedUser) => {
    if(!error){
      let resObj = {}
      resObj['name'] = savedUser.name
      resObj['movie'] = savedUser.movie
      resObj['_id'] = savedUser.id
      res.json(resObj)
    }
  })
})

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
