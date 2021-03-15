function createCar() {
  fetch('http://localhost:3000/vehicle/car', {
    method: 'post',
    body: JSON.stringify({
      brand: document.getElementById('brand').value,
      type: document.getElementById('type').value,
      model: document.getElementById('model').value,
      price: parseInt(document.getElementById('price').value),
      year: parseInt(document.getElementById('year').value),
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));
}

function updateCar(id) {
  fetch(`http://localhost:3000/vehicle/car/${id}`, {
    method: 'put',
    body: JSON.stringify({
      brand: document.getElementById('brand').value,
      type: document.getElementById('type').value,
      model: document.getElementById('model').value,
      price: parseInt(document.getElementById('price').value),
      year: parseInt(document.getElementById('year').value),
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));
}


function deleteCar(id) {
  fetch(`http://localhost:3000/vehicle/car/${id}`, {
    method: 'delete',
  }).then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));
}
