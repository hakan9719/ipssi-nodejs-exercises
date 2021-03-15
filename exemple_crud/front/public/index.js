
function createAnimal() {
  // Supprime l'événement par defaut du bouton
  event.preventDefault();

  fetch('http://localhost:3000', {
    method: 'post',
    body: JSON.stringify({
      nom: document.getElementById('name').value,
      age: parseInt(document.getElementById('age').value)
    }),
    headers: {
      'Content-type': 'application/json',
    }
  })
  .then((data) => data.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err))
}

function deleteAnimal(id) {
  console.log(id);
  event.preventDefault();

  fetch(`http://localhost:3000/${id}`, {
    method: 'delete',
  })
  .then((data) => data.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err))
}
