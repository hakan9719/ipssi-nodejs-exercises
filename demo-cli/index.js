const inquirer = require("inquirer");
const checkboxPlus = require("inquirer-checkbox-plus-prompt");

inquirer.registerPrompt(
  "checkbox-plus",
  require("inquirer-checkbox-plus-prompt")
);

inquirer
  .prompt([
    // {
    //   type: "checkbox-plus",
    //   name: "check",
    //   message: "Checkbox input",
    //   source: ["1", "2", "3"],
    // },
    {
      type: "list",
      name: "shape",
      message: "Quelle forme voulez-vous ?",
      choices: ["carré", "triangle", "cercle"],
    },
    {
      type: "input",
      name: "hauteur",
      message: "Quelle est la hauteur ?",
      validate: (value) => {
        return !isNaN(parseFloat(value)) || "Rentrez un nombre valide";
      },
      filter: Number,
    },
    {
      type: "confirm",
      name: "isConfirmed",
      message: "Confirmez-vous votre choix ?",
      default: false,
    },
  ])
  .then((answers) => {
    console.log(answers);

    if (answers.shape === "triangle") {
      console.log("La forme choisie est un triangle");

      inquirer
        .prompt({
          type: "input",
          name: "input",
          message: "Ecrire quelque chose",
          filter: (value) => {
            return value.toLowerCase();
          },
        })
        .then(({ input }) => {
          inquirer.prompt({
            type: "expand",
            name: "test",
            message: "Choisissez",
            choices: [
              {
                key: "p",
                name: "test 1",
                value: "1",
              },
              {
                key: "d",
                name: "test 2",
                value: "2",
              },
            ],
          });
        });
    }
  });
