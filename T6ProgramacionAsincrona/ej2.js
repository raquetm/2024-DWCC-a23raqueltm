'use strict';

// Seleccionamos os elementos necesarios
const titulo = document.getElementById('titulo');
const botonIniciar = document.getElementById('iniciar');
const botonDeter = document.getElementById('deter');

let intervalID = null; // Variable para almacenar o ID do intervalo

// Función para cambiar a cor alternativamente
function flashText() {
  if (titulo.style.color === 'red') {
    titulo.style.color = 'green';
  } else {
    titulo.style.color = 'red';
  }
}

// Función para iniciar o intervalo
function changeColor() {
  if (!intervalID) {
    // Evita múltiples intervalos
    intervalID = setInterval(flashText, 1000);
  }
}

// Función para deter o intervalo
function stopTextColor() {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null; // Limpamos a referencia
  }
}

// Engadimos os eventos aos botóns
botonIniciar.addEventListener('click', changeColor);
botonDeter.addEventListener('click', stopTextColor);
