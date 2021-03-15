const { Car } = require("../models");

const getCars = (req, res, next) => {
  Car.find()
    .then((cars) => {
      res.send(cars);
    })
    .catch(next);
};

const getCarByID = (req, res, next) => {
  Car.findById(req.params.id)
    .then((car) => {
      res.send(car);
    })
    .catch(next);
};

const createCar = (req, res, next) => {
  Car.create(req.body)
    .then((car) => {
      res.send(car);
    })
    .catch(next);
};

const updateCarByID = (req, res, next) => {
  const { id } = req.params;

  Car.findByIdAndUpdate(id, req.body)
    .then(() => {
      Car.findById(id).then((car) => {
        res.send(car);
      });
    })
    .catch(next);
};

const deleteCarByID = (req, res, next) => {
  Car.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send("deleted");
    })
    .catch(next);
};

module.exports = {
  getCars,
  getCarByID,
  createCar,
  updateCarByID,
  deleteCarByID,
};
