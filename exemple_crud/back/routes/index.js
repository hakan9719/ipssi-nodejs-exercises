const {
  getAnimals,
  getAnimalByID,
  createAnimal,
  deleteAnimal,
  updateAnimal,
} = require("../controllers/animal");

const createRoutes = (app) => {
  // Pareil que
  // app.get("/", (res, req, next) => getAnimals(req, res, next))
  app.get("/", getAnimals);

  app.get("/:id", getAnimalByID),

  app.post("/", (req, res, next) => createAnimal(req, res, next));

  app.put("/:id", updateAnimal);

  app.delete("/:id", deleteAnimal);
};

module.exports = createRoutes;
