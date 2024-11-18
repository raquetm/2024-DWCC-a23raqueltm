// 4. Crea un documento HTML que contenga un elemento <ul>. Desde JavaScript crea 4 elementos <li> y agrégalos a la lista <ul>,
// de manera que sean visibles en el navegador.
// Escribe el código JavaScript para insertar "<li>2</li><li>3</li>" entre los dos <li> siguientes:

// Seleccionamos el elemento <ul> existente en el documento usando querySelector.
let ul = document.querySelector('ul');
// Creamos 4 elementos <li> y los agregamos al final de la lista <ul>
// Usamos un bucle for para crear los elementos <li>
for (let i = 1; i <= 4; i++) {
  // Creamos un elemento <li>
  let li = document.createElement('li');
  // Añadimos el texto a <li>
  li.textContent = `Elemento ${i}`;
  // Añadimos el <li> al final de la lista <ul>
  ul.appendChild(li);
}

// Creamos dos elementos <li> para 2 y 3
let li2 = document.createElement('li'); // Creamos un <li> para 2
li2.textContent = '2'; // Añadimos el texto 2 al <li>

let li3 = document.createElement('li'); // Creamos un <li> para 3
li3.textContent = '3'; // Añadimos el texto 3 al <li>

// Seleccionamos los elementos <li> con id one y two
let liOne = document.getElementById('one'); // Seleccionamos el <li> con id "one"
let liTwo = document.getElementById('two'); // Seleccionamos el <li> con id "two"

// Insertamos el nuevo elemento <li> con "2"
// Usamos la función insertBefore
liOne.parentNode.insertBefore(li2, liTwo);

// Insertamos el nuevo elemento <li> con "3"
// 3 aparecerá después de 2
liOne.parentNode.insertBefore(li3, liTwo);
