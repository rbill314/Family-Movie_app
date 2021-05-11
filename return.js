let express = require("express");
let app = express();

let returnPage = new returnPage();

app.use("/public", express.static(process.cwd() + "/public"));
app.get((req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
});

module.exports = returnPage;
