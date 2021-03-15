const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res, next) => {
  res.render("home");
});

app.get('/animals', (req, res) => {
  fetch("http://localhost:3000/", {
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      res.render("animals", {animals: json});
    })
    .catch((err) => console.log(err));
});

app.get('/animal/:id', (req, res) => {
  fetch(`http://localhost:3000/${req.params.id}`)
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      res.render("animal", {animal: json});
    })
    .catch((err) => console.log(err));
});

app.get('/create', (req, res) => {
  res.render('addAnimal');
})

app.listen(4000, "localhost", () => {
  console.log("front-end is running");
});
