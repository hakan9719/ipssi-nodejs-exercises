const Animal = require("../models/index.js");

const getAnimals = (req, res, next) => {
  Animal.find({})
    .then((animals) => {
      res.send(animals);
    })
    .catch(next);
};

const getAnimalByID = (req, res, next) => {
  Animal.findById(req.params.id)
    .then((animal) => {
      res.send(animal);
    })
    .catch(next);
};

const createAnimal = (req, res, next) => {
  const newAnimal = req.body;

  console.log(newAnimal);

  Animal.create(newAnimal)
    .then((animal) => {
      res.send(animal);
    })
    .catch(next);
};

const deleteAnimal = (req, res, next) => {
  const id = req.params.id;

  Animal.findByIdAndDelete({ _id: id })
    .then((animal) => {
      res.send(animal);
    })
    .catch(next);
};

const updateAnimal = (req, res, next) => {
  const { id } = req.params;

  Animal.findByIdAndUpdate({ _id: id }, req.body)
    .then(() => {
      Animal.findOne({ _id: id }).then((newAnimal) => {
        res.send(newAnimal);
      });
    })
    .catch(next);
};

module.exports = { getAnimals, getAnimalByID, createAnimal, deleteAnimal, updateAnimal };
