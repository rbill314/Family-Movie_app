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

/*Connect to database*/
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
  const username = req.body.username;
  User.findOne({ username: username }, (err, found) => {
    if (err) return;
    if (found) {
      res.send("Username Taken");
    } else {
      const newUser = new User({
        username: username
      });
      newUser.save((err, save) => {
        if (err) return;
        res.json({
          username: username,
          _id: save._id
        });
      });
    }
  });
});

fastify.get("/api/users", (req, res) => {
  User.find({}, "username _id", (err, users) => {
    let arr = [];
    users.map(user => {
      arr.push(user);
    });
    res.json(arr);
  });
});

// Run the server and report out to the logs
fastify.listen(process.env.PORT, function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
