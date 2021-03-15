const inquirer = require("inquirer");

const calculateCircle = require("./circle");

const isValid = (value) => {
  return !isNaN(parseInt(value));
};

const calculator = async (type, shape) => {
  switch (shape) {
    case "carré":
      return inquirer
        .prompt({
          type: "input",
          name: "size",
          message: "Quelle la longueur d'un coté",
          validate: (value) => isValid(value) || "Entrez un chiffre valide",
          filter: Number,
        })
        .then(({ size }) => {
          const sizes = { aire: null, perimetre: null };

          if (type === "Aire" || type === "Les deux") {
            sizes.aire = size * size;
          }

          if (type === "Périmètre" || type === "Les deux") {
            sizes.perimetre = 4 * size;
          }

          return sizes;
        });
    case "cercle":
      return await calculateCircle(type);
    case "rectangle":
    case "triangle":
      return inquirer
        .prompt([
          {
            type: "confirm",
            name: "isRectangle",
            message: "Est-il rectangle ?",
            default: false,
          },
          {
            type: "input",
            name: "baseSize",
            message: "Quelle la taille de la base ?",
            validate: (value) => isValid(value) || "Entrez un chiffre valide",
            filter: Number,
            when: (answers) => !answers.isRectangle,
          },
          {
            type: "input",
            name: "heightSize",
            message: "Quelle la hauteur du triangle ?",
            validate: (value) => isValid(value) || "Entrez un chiffre valide",
            filter: Number,
            when: (answers) => !answers.isRectangle,
          },
          {
            type: "input",
            name: "firstLength",
            message: "Quelle la longueur du premier coté ?",
            validate: (value) => isValid(value) || "Entrez un chiffre valide",
            filter: Number,
          },
          {
            type: "input",
            name: "secondLength",
            message: "Quelle la longueur du deuxieme coté ?",
            validate: (value) => isValid(value) || "Entrez un chiffre valide",
            filter: Number,
          },
          {
            type: "input",
            name: "thirdLength",
            message: "Quelle la longueur du troisieme coté ?",
            validate: (value) => isValid(value) || "Entrez un chiffre valide",
            filter: Number,
          },
        ])
        .then((answers) => {
          const sizes = { aire: null, perimetre: null };

          if (answers.isRectangle) {
            if (type === "Aire" || type === "Les deux") {
              sizes.aire = (answers.firstLength * answers.secondLength) / 2;
            }
          } else {
            if (type === "Aire" || type === "Les deux") {
              sizes.aire = (answers.baseSize * answers.heightSize) / 2;
            }
          }

          if (type === "Périmètre" || type === "Les deux") {
            sizes.perimetre =
              answers.firstLength + answers.secondLength + answers.thirdLength;
          }

          return sizes;
        });
    case "losange":
    case "trapèze":
    case "parallélogramme":
  }
};

module.exports = calculator;
