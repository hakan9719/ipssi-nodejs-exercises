const inquirer = require("inquirer");

const calculateCircle = (type) => {
  return inquirer
    .prompt({
      type: "input",
      name: "diameter",
      message: "Quelle la taille du diamètre ?",
      validate: (value) =>
        !isNaN(parseInt(value)) || "Entrez un chiffre valide",
      filter: Number,
    })
    .then(({ diameter }) => {
      const sizes = { aire: null, perimetre: null };

      if (type === "Aire" || type === "Les deux") {
        const rayon = diameter / 2;

        sizes.aire = Math.PI * (rayon * rayon);
      }

      if (type === "Périmètre" || type === "Les deux") {
        sizes.perimetre = Math.PI * diameter;
      }

      return sizes;
    });
};

module.exports = calculateCircle;
