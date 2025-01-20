'use strict';

// Crea unha páxina web que mostre información de persoas recibida da API RANDOM
// USER GENERATOR.
// A API RANDOM USER GENERATOR permite xerar información aleatoria de
// persoas. Debes facer unha petición á URL https://randomuser.me/api/ para obter
// información en formato JSON. Crea unha páxina web onde se amose o nome e
// apelidos, correo electrónico, teléfono, cidade, país, idade e foto da información
// recibida.
// Cando se cargue a páxina por primeira vez debe mostrar información dunha persoa
// aleatoria.
// Engade un botón á páxina que permita cargar os datos doutra persoa.

function cargarUsuario() {
  const promesa = fetch('https://randomuser.me/api/');

  promesa
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    //.then((datos) => console.log(datos));
    .then((datos) => mostrarUsuario(datos));
}

const userInfoDiv = document.getElementById('userInfo');
const loadUserButton = document.getElementById('loadUser');

function mostrarUsuario(datos) {
  const usuario = datos.results[0];
  userInfoDiv.innerHTML = `
        <img src="${usuario.picture.large}" alt="Foto de ${usuario.name.first}">
        <h2>${usuario.name.first} ${usuario.name.last}</h2>
        <p><strong>Email:</strong> ${usuario.email}</p>
        <p><strong>Teléfono:</strong> ${usuario.phone}</p>
        <p><strong>Cidade:</strong> ${usuario.location.city}</p>
        <p><strong>País:</strong> ${usuario.location.country}</p>
        <p><strong>Idade:</strong> ${usuario.dob.age}</p>
      `;
}

cargarUsuario();

loadUserButton.addEventListener('click', cargarUsuario);
