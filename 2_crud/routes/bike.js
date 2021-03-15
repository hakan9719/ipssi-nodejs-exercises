const {
  getBikes,
  getBikeByID,
  createBike,
  updateBikeByID,
  deleteBikeByID,
} = require("../controllers");

const createBikeRoutes = (app) => {
  app.get("/vehicle/bikes", getBikes);

  app.get("/vehicle/bike/:id", getBikeByID);

  app.post("/vehicle/bike", createBike);

  app.put("/vehicle/bike/:id", updateBikeByID);

  app.delete("/vehicle/bike/:id", deleteBikeByID);
};

module.exports = createBikeRoutes;
