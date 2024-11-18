'use estrict';
// 1. Imaginar que la variable elemento hace referencia a un elemento del DOM y text es una variable con una cadena de
//texto que incluye etiquetas HTML. ¿Cuáles de los siguientes comandos harán exactamente lo mismo ?
//          a. elemento.append(document.createTextNode(text));
// Este método agrega solo el texto puro sin interpretar etiquetas HTML.
//          b. elemento.innerHTML = text;
// Este método interpreta y agrega el contenido con formato HTML.
//          c. elemento.textContent = text;
// Este método agrega solo texto sin procesar, ignorando etiquetas HTML.

// 2. Dada una lista <ol> con varios elementos <li>, crea el código necesario para eliminar todos los <li> de la lista.
// let lista = document.querySelector('ol');
// lista.innerHTML = '';

// 3. Dado el siguiente código, ¿por qué sigue apareciendo el “Texto” después de borrar la tabla?
// <table id="taboa">
//   Texto
//   <tr>
//     <td>Test</td>
//   </tr>
// </table>;
// let taboa = document.getElementById('taboa');
// taboa.remove();
// El texto "Texto" aparece porque no está contenido dentro de ningún elemento <tr> o <td>. Forma parte del nodo de texto del <table>.

// 5. Dado un objeto como el siguiente:
let arbore = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      'apple tree': {},
      magnolia: {},
    },
  },
};
