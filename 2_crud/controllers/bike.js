const { Bike } = require("../models");

const getBikes = (req, res, next) => {
  Bike.find()
    .then((bikes) => {
      res.send(bikes);
    })
    .catch(next);
};

const getBikeByID = (req, res, next) => {
  Bike.findById(req.params.id)
    .then((bike) => {
      res.send(bike);
    })
    .catch(next);
};

const createBike = (req, res, next) => {
  Bike.create(req.body)
    .then((bike) => {
      res.send(bike);
    })
    .catch(next);
};

const updateBikeByID = (req, res, next) => {
  const { id } = req.params;

  Bike.findByIdAndUpdate(id, req.body)
    .then(() => {
      Bike.findById(id).then((bike) => {
        res.send(bike);
      });
    })
    .catch(next);
};

const deleteBikeByID = (req, res, next) => {
  Bike.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send("deleted");
    })
    .catch(next);
};

module.exports = {
  getBikes,
  getBikeByID,
  createBike,
  updateBikeByID,
  deleteBikeByID,
};
