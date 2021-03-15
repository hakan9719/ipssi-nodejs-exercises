const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
  nom: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Animal = mongoose.model("animal", AnimalSchema);

module.exports = Animal;
