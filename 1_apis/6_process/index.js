const process = require("process");
const { argv } = require("process");

const param = argv;

if (param[2] === "nuit") {
  console.log("C'est la nuit");
} else if (param[2] === "jour") {
  console.log("Il fait jour !");
} else {
  console.log("Vous devez passer un argument (nuit ou jour).");
}
