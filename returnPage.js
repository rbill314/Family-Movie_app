let express = require("express");
let app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });
