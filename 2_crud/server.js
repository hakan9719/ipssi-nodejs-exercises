const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

var errorHandler = require("errorhandler");

// ...

const { createCarRoutes, createBikeRoutes } = require("./routes");

mongoose.connect("mongodb://localhost:27017/crud");

const app = express();

app.use(cors());
app.use(errorHandler({ dumpExceptions: true, showStack: true }));
app.use(bodyParser.json());

createCarRoutes(app);
createBikeRoutes(app);

app.listen(3000, "localhost", () => {
  console.log("server started");
});
