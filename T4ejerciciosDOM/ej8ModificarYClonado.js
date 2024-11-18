// Ordena la siguiente tabla por la columna “Nombre”. Escribe un código que funcione independientemente del número de filas de la tabla.

let tabla = document.getElementById('taboaOrdenar');
let filas = Array.from(tabla.querySelectorAll('tbody tr'));

filas.sort((a, b) => {
  let nombreA = a.children[0].textContent.toLowerCase();
  let nombreB = b.children[0].textContent.toLowerCase();
  return nombreA.localeCompare(nombreB);
});

let tbody = tabla.querySelector('tbody');
filas.forEach((fila) => tbody.appendChild(fila));
