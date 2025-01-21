'use strict';

// Neste exercicio vaise usar a API https://jsonplaceholder.typicode.com/ que contén,
// entre outras cousas, información falsa de posts e comentarios.
// Debes elaborar unha páxina web que conteña un formulario con un campo input,
// para introducir o id dun usuario (un número entre 1 e 10), e un botón. Ao pulsar o
// botón, farase unha petición ao servidor para que devolva todos os posts do id de
// usuario indicado no formulario. Así, por exemplo, para o usuario con id = 1, a url de
// consulta será https://jsonplaceholder.typicode.com/posts?userId=1. Tamén é válida a
// URL https://jsonplaceholder.typicode.com/users/1/posts.
// Coa información recibida debe crearse unha táboa e mostrar na páxina web toda a
// información dos posts do usuario co id indicado no formulario. Isto debe suceder sen
// necesidade de recargar a páxina web.

const form = document.getElementById('form');
const userIDInput = document.getElementById('userID');
const postsTableBody = document
  .getElementById('postsTable')
  .getElementsByTagName('tbody')[0]; // Definimos postsTableBody correctamente

function cargarPosts(userId) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => {
      return response.json();
    })
    .then((posts) => {
      mostrarPosts(posts);
    });
}

function mostrarPosts(posts) {
  postsTableBody.innerHTML = '';

  if (posts.length === 0) {
    postsTableBody.innerHTML =
      '<tr><td colspan="3">No se encontraron posts para este usuario.</td></tr>';
    return;
  }

  // Añadir las filas a la tabla
  posts.forEach((post) => {
    const row = postsTableBody.insertRow();
    row.innerHTML = `
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
          `;
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userId = parseInt(userIDInput.value, 10);
  cargarPosts(userId);
});
