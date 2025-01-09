//ejercicio2.js:
const boton = document.getElementById('engadir');
const textoInput = document.getElementById('texto');
const lista = document.getElementById('lista');

boton.addEventListener('click', () => {
  const texto = textoInput.value.trim(); // Obtenemos el texto ingresado y eliminamos espacios innecesarios
  if (texto !== '') {
    // Solo añadimos si no está vacío
    const nuevoElemento = document.createElement('li'); // Creamos un nuevo elemento <li>
    nuevoElemento.textContent = texto; // Asignamos el texto ingresado
    lista.appendChild(nuevoElemento); // Añadimos el nuevo elemento a la lista
    textoInput.value = ''; // Limpiamos la caja de texto
  } else {
    alert('Introduce texto antes de engadir un elemento.'); // Avisamos si la caja está vacía
  }
});
