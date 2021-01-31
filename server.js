const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

var PORT = process.env.PORT || 8080;
var db = require("./models");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  { useNewUrlParser: true }
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
© 2021 GitHub, Inc.