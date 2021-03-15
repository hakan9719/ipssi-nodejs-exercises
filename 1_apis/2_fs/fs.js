const fs = require("fs");

// const { copyFile, stat } = require('fs/promises');

fs.readFile("text.txt", "utf-8", (err, data) => {
  if (err !== null) {
    console.error(err);

    return;
  }

  console.log(data);
});

fs.mkdir("nouveauDossier3", (err) => {
  if (err !== null) {
    console.error(err);

    return;
  }

  fs.copyFile("text.txt", "nouveauDossier3/copy_text.txt", (err) => {
    if (err !== null) {
      console.error(err);
    }
  });
});

fs.stat("text.txt", (err, stats) => {
  if (err !== null) {
    console.error(err);

    return;
  }

  console.log(stats);
});

fs.stat("nouveauDossier3", (err, stats) => {
  if (err !== null) {
    console.error(err);

    return;
  }

  console.log(stats);
});
