const {
  getCars,
  getCarByID,
  createCar,
  updateCarByID,
  deleteCarByID,
} = require("../controllers");

const createCarRoutes = (app) => {
  app.get("/vehicle/cars", getCars);

  app.get("/vehicle/car/:id", getCarByID);

  app.post("/vehicle/car", createCar);

  app.put("/vehicle/car/:id", updateCarByID);

  app.delete("/vehicle/car/:id", deleteCarByID);
};

module.exports = createCarRoutes;
