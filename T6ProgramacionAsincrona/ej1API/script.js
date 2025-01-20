const form = document.getElementById('form');
const userID = document.getElementById('userID');
const output = document.getElementById('output');

function createPost(userID) {
  let options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  fetch('https://jsonplaceholder.typicode.com/posts?userId=${userID}', options)
    .then((response) => response.json())
    .then((data) => {
      output;
    });
}
