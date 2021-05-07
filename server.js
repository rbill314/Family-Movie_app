const path = require("path");
const mongoose = require("mongoose");
const fastify = require("fastify")({
  logger: true
});

fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "public"),
  prefix: "/" // optional: default '/'
});

fastify.register(require("fastify-formbody"));

// point-of-view is a templating manager for fastify
fastify.register(require("point-of-view"), {
  engine: {
    handlebars: require("handlebars")
  }
});

mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

if (mongoose.connection.readyState) {
  console.log("Holy Crap! It Connected");
} else if (!mongoose.connection.readyState) {
  console.log("WHACHA DO!!!");
}

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  movie: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

fastify.post("/api/users", (req, res) => {
  const movie = req.body.movie;
  const name = req.body.name;
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
          name: name,
          _id: save._id
        });
      });
    }
  });
});

fastify.get("/api/users", (req, res) => {
  User.find({}, "name movie", (err, users) => {
    let arr = [];
    users.map(user => {
      arr.push(user);
    });
    res.json(arr);
  });
});

fastify.listen(process.env.PORT, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
