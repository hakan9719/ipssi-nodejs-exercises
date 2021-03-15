const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const createRoutes = require("./routes/index.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/demo-crud");

createRoutes(app);

app.listen(3000, () => {
  console.log("Server is running");
});
