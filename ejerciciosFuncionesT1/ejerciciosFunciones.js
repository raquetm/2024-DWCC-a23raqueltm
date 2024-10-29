'use estrict';
// 1. Crea unha función frecha que devolva o cubo dun número pasado como parámetro.
const cubo = (numero) => numero ** 3; // ** se usa para elevar a un número: numero³
console.log(cubo(3));

// 2. Crea unha función frecha á que se lle pase un array e devolva como resultado un
// array cos elementos impares do array de entrada.
const numerosImpares = (array) => {
  const resultado = []; // array vacío para almacenar los impares
  for (let i = 0; i < array.length; i++) {
    // recorrer el array
    if (array[i] % 2 !== 0) {
      // si el número es impar se añade a resultado
      resultado.push(array[i]);
    }
  }
  return resultado;
};
const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];
console.log(numerosImpares(arrayEntrada)); // (4) [3, 5, 7, 23]

// 3. Crea unha función frecha que sume todos os valores pasados como parámetros,
// sendo estes un número indeterminado.
const sumarValores = (...valores) => {
  let suma = 0;
  for (let i = 0; i < valores.length; i++) {
    // recorremos todos los valores
    suma += valores[i];
  }
  return suma;
};
console.log(sumarValores(4, 5, 2001));

// 4. Crea unha función á que se lle pasen varios números como parámetros (un número
// indeterminado de parámetros) e que devolva a media deses números.
const mediaFuncion = (...numerosMedia) => {
  let suma = 0;
  for (let index = 0; index < numerosMedia.length; index++) {
    suma = suma + numerosMedia[index];
  }
  const media = suma / numerosMedia.length;
  return media;
};
console.log(mediaFuncion(1, 2, 3));

// 5. Crea unha función frecha chamada minMax() que reciba como parámetro un array
// de números e devolva un obxecto co valor mínimo e máximo do array de entrada:
// console.log(minMax([1, 2, 3, 4, 5])); // Debe devolver { min: 1, max: 5 }
const minMax = ([...arrayNumeros]) => {
  const min = Math.min(...arrayNumeros);
  const max = Math.max(...arrayNumeros);
  return { min, max };
};
console.log(minMax([1, 2, 3, 4, 5]));

// 6. Crea unha función autoinvocada á que se lle pase a lonxitude e ancho dun
// rectángulo. A función debe mostrar por consola unha mensaxe indicando o valor da
// área do rectángulo.
const areaRectangulo = (() => {
  const lonxitude = 2;
  const ancho = 3;
  let area = lonxitude * ancho;
  return area;
})();
console.log(areaRectangulo);

// 7. Crea unha función á que se lle pase un DNI (ex: 12345678w ou 87654321T) e
// devolva se é correcto ou non.
const comprobarDNI = (dni) => {
  const letras = 'TRWAGMYFPDXBNJZSQVHLCKE'; // As letras correspondentes aos restos
  const numero = dni.slice(0, -1); // Obten os 8 primeiros díxitos
  const letra = dni.slice(-1).toUpperCase(); // Obten a letra e pásaa a maiúsculas
  // Verifica que hai 8 díxitos e que son un número
  if (numero.length !== 8 || isNaN(numero)) {
    return false;
  }
  // Calcula a letra correcta
  const letraCalculada = letras[numero % 23];

  return letra === letraCalculada;
};
console.log(comprobarDNI('53612268g'));
console.log(comprobarDNI('53612268G'));
console.log(comprobarDNI('87654321T'));

// 8. Crea unha función que reciba como parámetro unha cantidade enteira e faga o
// desglose do número de billetes e moedas necesarios para obtela. Debe usarse o
// número mínimo de billetes e moedas.
const billetesMonedas = (dinero) => {
  let denominaciones = [500, 200, 100, 50, 20, 10, 5, 2, 1];
  //objeto vacío: Las claves del objeto serán los valores de las denominaciones y los valores serán la cantidad de billetes/monedas de esa denominación
  let resultado = {};

  denominaciones.forEach((denominacion) => {
    // se verifica si la cantidad restante es mayor o igual a la denominación actual.
    // Si es así, significa que se pueden usar billetes o monedas de ese valor para desglosar la cantidad.
    if (dinero >= denominacion) {
      resultado[denominacion] = Math.floor(dinero / denominacion); // Número de billetes/monedas
      dinero = dinero % denominacion; // Resto del dinero
    }
  });
  return resultado;
};

console.log(billetesMonedas(5679));

// 9. Crea unha función chamada buscarPatron(texto, patron) que reciba como
// parámetros un texto e un patrón. A función debe devolver como resultado o número
// de veces que aparece o patrón no texto, tendo en conta que un carácter pode formar
// parte de máis dun patrón encontrado.
// Debe implementarse a función de forma manual sen utilizar as funcións
// proporcionadas pola linguaxe JavaScript para buscar en cadeas.
// Non se deben distinguir maiúsculas de minúsculas.
// Exemplo: buscarPatron(“000111101000ABCHA”, “00”) debe devolver 4.
const buscarPatron = (texto, patron) => {
  texto = texto.toUpperCase();
  patron = patron.toUpperCase();
  let contador = 0;

  for (let index = 0; index <= texto.length - patron.length; index++) {
    const element = texto[index];
    let igual = true;

    for (let i = 0; i < patron.length; i++) {
      if (texto[i + index] !== patron[i]) {
        igual = false;
        break;
      }
    }
    if (igual) {
      contador++;
    }
  }
  return contador;
};

console.log(buscarPatron('000111101000ABCHA', '00')); // 4

// 10. Crea unha función JavaScript que comprobe se é posible axendar unha reunión
// dentro do horario laboral.
// A estrutura da función e do programa proporciónanse a continuación. O seguinte
// código inclúe comprobacións con assert, que mostrarán por pantalla unha mensaxe
// en caso de que a aserción sexa falsa. É dicir, se a comprobación é correcta, o
// programa non mostrará ningunha mensaxe:
const inicioXornada = '07:30';
const finalXornada = '17:45';

function convertirAHorasMinutos(hora) {
  const [horas, minutos] = hora.split(':').map(Number);
  return horas * 60 + minutos;
}

function axendarReunion(horaInicioReunion, duracionEnMinutos) {
  inicioReunionMinutos = convertirAHorasMinutos(horaInicioReunion);
  inicioXornadaMinutos = convertirAHorasMinutos(inicioXornada);
  finalXornadaMinutos = convertirAHorasMinutos(finalXornada);

  finalReunionMinutos = inicioReunionMinutos + duracionEnMinutos;

  if (inicioReunionMinutos > inicioXornadaMinutos) {
    return true;
  }
  if (finalReunionMinutos < finalXornadaMinutos) {
    return true;
  } else {
    return false;
  }
}
// Comprobacións
console.assert(
  axendarReunion('7:00', 15) == false,
  'Fallo comprobando axendarReunión("7:00", 15) == false'
);
console.assert(
  axendarReunion('7:15', 30) == false,
  'Fallo comprobando axendarReunión("7:15", 30) == false'
);
console.assert(
  axendarReunion('7:30', 30) == true,
  'Fallo comprobando axendarReunión("7:30", 30) == true'
);
console.assert(
  axendarReunion('11:30', 60) == true,
  'Fallo comprobando axendarReunion("11:30", 60) == true'
);
console.assert(
  axendarReunion('17:00', 45) == true,
  'Fallo comprobando axendarReunion("17:00", 45) == true'
);
console.assert(
  axendarReunion('17:30', 30) == false,
  'Fallo comprobando axendarReunion("17:30", 30) == false'
);

// 11. Crea unha función que reciba un array bidimensional de lonxitude variable que se
// corresponda cun escenario do xogo de Buscaminas. Este array almacenará un -1
// nas posicións onde hai minas e un 0 en caso contrario. A función debe devolver un
// array bidimensional onde cada posición que non teña mina, debe ter a información
// do número de minas adxacentes (diagonal, horizontal e vertica
function contarMinasAdyacentes(tablero, fila, col) {
  let contador = 0;
  const filas = tablero.length;
  const columnas = tablero[0].length;

  // Recorremos todas las posiciones adyacentes (incluidas las diagonales)
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const nuevaFila = fila + i;
      const nuevaColumna = col + j;

      // Verificar que estamos dentro de los límites de la matriz y que no es la posición actual
      if (
        nuevaFila >= 0 &&
        nuevaFila < filas &&
        nuevaColumna >= 0 &&
        nuevaColumna < columnas
      ) {
        if (tablero[nuevaFila][nuevaColumna] === -1) {
          contador++;
        }
      }
    }
  }
  return contador;
}

function generarTableroBuscaminas(tablero) {
  const filas = tablero.length;
  const columnas = tablero[0].length;
  const resultado = [];

  // Inicializamos el tablero resultado con el mismo tamaño que el original
  for (let i = 0; i < filas; i++) {
    resultado[i] = [];
    for (let j = 0; j < columnas; j++) {
      if (tablero[i][j] === -1) {
        resultado[i][j] = -1; // Mantener la mina en la posición
      } else {
        resultado[i][j] = contarMinasAdyacentes(tablero, i, j);
      }
    }
  }

  return resultado;
}

// Ejemplo de uso
const tableroEntrada = [
  [0, 0, -1, 0],
  [0, -1, -1, 0],
  [0, 0, 0, 0],
];

const tableroResultado = generarTableroBuscaminas(tableroEntrada);
console.log(tableroResultado);

//EJERCICIOS MÉTODOS ARRAYS
// 1. Suma los valores de la propiedad price del siguiente array de objetos:
const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

const total = objects.reduce(
  (accumulator, currentObject) => accumulator + currentObject.price,
  0
); // El 0 es el valor inicial del acumulador

console.log(total);

// 2. Utilizando la función reduce, obtén el valor mínimo de un array de números.
const numeros = [4, 5, 2001, 23];
const valorMinimo = numeros.reduce((accumulator, currentValue) => {
  return currentValue < accumulator ? currentValue : accumulator;
});
console.log(valorMinimo);

// 1. Dado el siguiente array:
const personas = [
  { nombre: 'aaron', edad: 65, id: 1 },
  { nombre: 'beth', edad: 2, id: 2 },
  { nombre: 'ánxeles', edad: 13, id: 3 },
  { nombre: 'daniel', edad: 3, id: 4 },
  { nombre: 'ada', edad: 25, id: 5 },
  { nombre: 'erea', edad: 1, id: 6 },
  { nombre: 'navia', edad: 43, id: 7 },
];
//    a. Nuevo array con solo las personas mayores de edad (edad >= 18)
const mayoresDeEdad = personas
  .filter((persona) => persona.edad >= 18)
  .map((persona) => persona.nombre);
console.log(mayoresDeEdad);
//    b. Nuevo array con los nombres de todas las personas
const nombres = personas.map((persona) => persona.nombre);
console.log(nombres);
//    c. Nuevo array con los nombres en mayúsculas de las personas mayores de edad
const nombresMayoresDeEdad = personas
  .filter((persona) => persona.edad >= 18)
  .map((persona) => persona.nombre.toUpperCase());
console.log(nombresMayoresDeEdad);
//    d. Nuevo array con objetos solo con el id y el nombre de cada persona
const idsYNombres = personas.map((persona) => ({
  id: persona.id,
  nombre: persona.nombre,
}));
console.log(idsYNombres);

// 2. Dado un array con los días de la semana en minúsculas:
const diasSemana = [
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
  'domingo',
];
//    a. Obtener un nuevo array con los días que empiezan por “m” y mostrarlo por consola
const diasConM = diasSemana.filter((dia) => dia.startsWith('m'));
console.log('Días que empiezan por "m":', diasConM);

//    b. Mostrar un mensaje indicando si algún día comienza por ‘s’
const algunDiaConS = diasSemana.some((dia) => dia.startsWith('s'));
console.log(
  algunDiaConS ? "Algún día comienza por 's'" : "Ningún día comienza por 's'"
);
//    c. Mostrar un mensaje indicando si todos los días terminan en ‘s’
const todosTerminanEnS = diasSemana.every((dia) => dia.endsWith('s'));
console.log(
  todosTerminanEnS
    ? "Todos los días terminan en 's'"
    : "No todos los días terminan en 's'"
);
//    d. Mostrar por consola el primer día que empiece por “m”
const primerDiaConM = diasSemana.find((dia) => dia.startsWith('m'));
console.log('Primer día que empieza por "m":', primerDiaConM);
//    e. Mostrar por consola la posición en el array del primer día que empieza por “m”
const posicionPrimerDiaConM = diasSemana.findIndex((dia) =>
  dia.startsWith('m')
);
console.log(
  'Posición del primer día que empieza por "m":',
  posicionPrimerDiaConM
);
//    f. Crear un nuevo array con los días de la semana en mayúsculas
const diasEnMayusculas = diasSemana.map((dia) => dia.toUpperCase());
console.log('Días en mayúsculas:', diasEnMayusculas);

// 3. Haz una función que ordene las notas de un array pasado como parámetro. Por ejemplo, si se pasa el array [4,8,3,10,5] debe devolver [3,4,5,8,10].
//Debes utilizar la función sort y pasarle como parámetro una función que tú definas que sirva para realizar la comparación de elementos.
function ordenarNotas(notas) {
  return notas.sort((a, b) => a - b);
}
const notas = [4, 8, 9, 10, 5];
const notasOrdenadas = ordenarNotas(notas);
console.log(notasOrdenadas);

// 4. Dado un array de números, obtén el valor más alto. (Usa alguna de las funciones para trabajar con arrays).
const arrayNumeros = [4, 5, 2001, 23];
const valorMaximo = numeros.reduce((accumulator, currentValue) => {
  return currentValue > accumulator ? currentValue : accumulator;
});
console.log(valorMaximo);

// 5. Dada la siguiente información:
const inventores = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];
//    a. Filtra el array de inventores y crea un array solo con los inventores que nacieron en el siglo XVI.
//    b. Crea un array con el nombre completo de los inventores. Por ejemplo: ["Albert Einstein", "Isaac Newton", ...].
//    c. Una vez obtenido el array con el nombre completo de los inventores del ejercicio anterior, ordénalo alfabéticamente por el apellido.
//    d. Ordena alfabéticamente por el apellido el array de objetos inventores inicial.
//    e. Ordena el array de inventores por la fecha de nacimiento.
//    f. Calcula la suma de los años que vivieron todos los inventores.
//    g. Ordena los inventores por los años que vivieron, primero el más longevo.

// 6. Dada la siguiente información, obtén un objeto con una propiedad para cada medio de transporte, indicando el número de veces que se repite en el array.
//Es decir, el resultado debería ser { car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1 }.
//Intenta hacer el ejercicio usando el método reduce.
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
  'pogostick',
];
