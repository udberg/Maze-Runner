const newGame = {
  name: 'Runner',
};

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
  method: 'post',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(newGame),
})
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem('key-api', data);
  });
