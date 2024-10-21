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

// 5. Crea unha función frecha chamada minMax() que reciba como parámetro un array
// de números e devolva un obxecto co valor mínimo e máximo do array de entrada:
// console.log(minMax([1, 2, 3, 4, 5])); // Debe devolver { min: 1, max: 5 }

// 6. Crea unha función autoinvocada á que se lle pase a lonxitude e ancho dun
// rectángulo. A función debe mostrar por consola unha mensaxe indicando o valor da
// área do rectángulo.

// 7. Crea unha función á que se lle pase un DNI (ex: 12345678w ou 87654321T) e
// devolva se é correcto ou non.

// 8. Crea unha función que reciba como parámetro unha cantidade enteira e faga o
// desglose do número de billetes e moedas necesarios para obtela. Debe usarse o
// número mínimo de billetes e moedas.

// 9. Crea unha función chamada buscarPatron(texto, patron) que reciba como
// parámetros un texto e un patrón. A función debe devolver como resultado o número
// de veces que aparece o patrón no texto, tendo en conta que un carácter pode formar
// parte de máis dun patrón encontrado.
// Debe implementarse a función de forma manual sen utilizar as funcións
// proporcionadas pola linguaxe JavaScript para buscar en cadeas.
// Non se deben distinguir maiúsculas de minúsculas.
// Exemplo: buscarPatron(“000111101000ABCHA”, “00”) debe devolver 4.

// 10. Crea unha función JavaScript que comprobe se é posible axendar unha reunión
// dentro do horario laboral.
// A estrutura da función e do programa proporciónanse a continuación. O seguinte
// código inclúe comprobacións con assert, que mostrarán por pantalla unha mensaxe
// en caso de que a aserción sexa falsa. É dicir, se a comprobación é correcta, o
// programa non mostrará ningunha mensaxe:

// 11. Crea unha función que reciba un array bidimensional de lonxitude variable que se
// corresponda cun escenario do xogo de Buscaminas. Este array almacenará un -1
// nas posicións onde hai minas e un 0 en caso contrario. A función debe devolver un
// array bidimensional onde cada posición que non teña mina, debe ter a información
// do número de minas adxacentes (diagonal, horizontal e vertica
