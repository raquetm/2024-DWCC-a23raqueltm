'use estrict';

// 3. Dado el siguiente código HTML:
<html>
  <body>
    <div>Users:</div>
    <ul>
      <li>John</li>
      <li>Pete</li>
    </ul>
  </body>
</html>;
// Utilizando diferentes propiedades para recorrer el DOM, indica, al menos, una forma de acceder a los siguientes nodos:
//          El nodo <div>:
const divNode = document.body.firstElementChild;
console.log(divNode); //Alternativamente, también podrías usar document.querySelector('div').
//          El nodo <ul>:
const ulNode = document.body.children[1];
console.log(ulNode); // Otra forma de hacerlo es document.querySelector('ul').
//          El segundo <li>:
const secondLiNode = document.body.children[1].lastElementChild;
console.log(secondLiNode); // También podrías usar document.querySelectorAll('li')[1].

// 4. Dado un elemento cualquiera en un árbol DOM:
// ¿Es cierto que elemento.lastChild.nextSibling es siempre null?
// Respuesta: Sí, es cierto. elemento.lastChild representa el último nodo hijo de elemento. Al ser el último, no tiene ningún
//nodo hermano que le siga, por lo que elemento.lastChild.nextSibling siempre será null.
// ¿Es cierto que elemento.children[0].previousSibling es siempre null?
// Respuesta: No necesariamente. elemento.children[0] es el primer hijo que es un elemento, pero previousSibling
//incluye todos los nodos(como nodos de texto o comentarios).Si antes de este primer elemento existe algún nodo de texto o comentario,
//previousSibling no será null.Solo será null si elemento.children[0] es efectivamente el primer nodo sin ningún tipo de hermano anterior.

// 5. Escribe el código para pintar las celdas diagonales de una tabla en rojo. La tabla debería quedar similar a la siguiente:
// Para lograr esto, primero necesitas una tabla cuadrada en HTML. Luego, puedes usar JavaScript para aplicar un estilo de fondo rojo a las celdas diagonales.
<html>
  <body>
    <table id="myTable" border="1">
      <tr>
        <td>1,1</td>
        <td>1,2</td>
        <td>1,3</td>
      </tr>
      <tr>
        <td>2,1</td>
        <td>2,2</td>
        <td>2,3</td>
      </tr>
      <tr>
        <td>3,1</td>
        <td>3,2</td>
        <td>3,3</td>
      </tr>
    </table>
  </body>
</html>;
const table = document.getElementById('myTable');
for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = 'red';
}
