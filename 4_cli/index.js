const inquirer = require("inquirer");

const calculator = require("./calculator");

inquirer
  .prompt({
    type: "list",
    name: "calculeType",
    message: "Que voulez-vous calculer ?",
    choices: ["Périmètre", "Aire", "Les deux"],
  })
  .then(async (answers) => {
    const type = answers.calculeType;
    const shape = await shapeSelection();

    const { aire, perimetre } = await calculator(type, shape);

    if (aire !== null) {
      console.log(`L'aire de la forme ${shape} est : ${aire}`);
    }

    if (perimetre !== null) {
      console.log(`Le périmètre de la forme ${shape} est : ${perimetre}`);
    }
  });

const shapeSelection = () => {
  return inquirer
    .prompt({
      type: "list",
      name: "shape",
      message: "Quelle forme voulez-vous utiliser ?",
      choices: [
        "carré",
        "cercle",
        "rectangle",
        "triangle",
        "losange",
        "trapèze",
        "parallélogramme",
      ],
    })
    .then(({ shape }) => {
      console.log(shape);

      return shape;
    });
};
