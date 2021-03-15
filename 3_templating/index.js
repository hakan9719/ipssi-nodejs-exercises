const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('pages/home');
});

app.get('/cars', (req, res) => {
  fetch('http://localhost:3000/vehicle/cars')
  .then((data) => data.json())
  .then((json) => {
    res.render('pages/cars', {cars: json});
  })
});

app.get('/car/:id', (req, res) => {
  fetch(`http://localhost:3000/vehicle/car/${req.params.id}`)
  .then((data) => data.json())
  .then((json) => {
    res.render('pages/car', {car: json});
  })
});

app.get('/create/car', (req, res) => {
  res.render('pages/createCar');
});

app.get('/update/car/:id', (req, res) => {
  fetch(`http://localhost:3000/vehicle/car/${req.params.id}`)
  .then((data) => data.json())
  .then((json) => {
    res.render('pages/updateCar', {car: json});
  })
});

app.listen(4000, () => {
  console.log('template runing');
})
