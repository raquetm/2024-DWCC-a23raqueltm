// Dada una lista como la siguiente, escribe el código que añada el número de descendientes a cada elemento:

function agregarContador(elemento) {
  let descendientes = elemento.querySelectorAll('li').length;
  if (descendientes) {
    elemento.firstChild.textContent += ` (${descendientes})`;
  }
  Array.from(elemento.children).forEach((hijo) => {
    if (hijo.tagName === 'LI') {
      agregarContador(hijo);
    }
  });
}

let listaAnimales = document.getElementById('listaAnimales');
agregarContador(listaAnimales);
