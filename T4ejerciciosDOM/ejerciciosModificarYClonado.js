'use estrict';
// 1. Imaginar que la variable elemento hace referencia a un elemento del DOM y text es una variable con una cadena de
//texto que incluye etiquetas HTML. ¿Cuáles de los siguientes comandos harán exactamente lo mismo ?
//          a. elemento.append(document.createTextNode(text));

//          b. elemento.innerHTML = text;

//          c. elemento.textContent = text;

// 2. Dada una lista <ol> con varios elementos <li>, crea el código necesario para eliminar todos los <li> de la lista.

// 3. Dado el siguiente código, ¿por qué sigue apareciendo el “Texto” después de borrar la tabla?
<table id="taboa">
  Texto
  <tr>
    <td>Test</td>
  </tr>
</table>;

let taboa = document.getElementById('taboa');
taboa.remove();

// 4. Crea un documento HTML que contenga un elemento <ul>. Desde JavaScript crea 4 elementos <li> y agrégalos a la lista <ul>, de manera que sean visibles en el navegador.
// Escribe el código JavaScript para insertar "<li>2</li><li>3</li>" entre los dos <li> siguientes:
<ul id="listaULExercicio5">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>;

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

// 6. Crea una función createTree(data) que devuelva una lista <ul>/<li> como la de la imagen de la derecha, para los datos proporcionados.

// 7. Escribe una función crearCalendario(elemento, año, mes) que añada al elemento pasado como parámetro un calendario del año y mes indicados.
// El calendario debe ser una tabla, donde cada semana es un <tr> y cada día un <td>. La cabecera de la tabla está creada con <th>.
// Por ejemplo, el calendario resultante al llamar a la función con los siguientes parámetros se vería como la imagen proporcionada, en la que
//se han aplicado estilos CSS para mejorar la apariencia.
crearCalendario(calendario, 2022, 11);

// Ordena la siguiente tabla por la columna “Nombre”. Escribe un código que funcione independientemente del número de filas de la tabla.
<table id="taboaOrdenar">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Edad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Smith</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Pete</td>
      <td>Brown</td>
      <td>15</td>
    </tr>
    <tr>
      <td>Ann</td>
      <td>Lee</td>
      <td>5</td>
    </tr>
  </tbody>
</table>;

// Dada una lista como la siguiente, escribe el código que añada el número de descendientes a cada elemento:
<ul id="listaAnimales">
  <li>
    Animales
    <ul>
      <li>
        Mamíferos
        <ul>
          <li>Vacas</li>
          <li>Burros</li>
          <li>Perros</li>
          <li>Tigres</li>
        </ul>
      </li>
      <li>
        Otros
        <ul>
          <li>Serpientes</li>
          <li>Aves</li>
          <li>Lagartos</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    Peces
    <ul>
      <li>
        Acuario
        <ul>
          <li>Guppy</li>
          <li>Pez ángel</li>
        </ul>
      </li>
      <li>
        Mar
        <ul>
          <li>Trucha de mar</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>;
