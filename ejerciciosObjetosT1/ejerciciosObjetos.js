'use estrict';
//EXERCICIOS STRINGS:
// 1. Dada a seguinte constante, fai as operacións necesarias para que o primeiro
// carácter estea en maiúscula:
const cadea = 'desenvolvemento web';
//let novaCadea = cadea.replace('d', 'D');
novaCadea = cadea.replace(cadea.charAt(0), cadea.charAt(0).toLocaleUpperCase());
console.log(novaCadea); // 'Desenvolvemento web'

// 2. Crea unha función á que se lle pase unha cadea e devolva a cadea en sentido
// inverso.
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('I am a string')); // gnirts a ma I

// 3. Crea unha función á que se lle pase unha cadea de números e devolva unha cadea
// da mesma lonxitude formada por * e as últimas 4 cifras do parámetro de entrada.
// console.log(enmascarar(“1234123412347777”)); // ************7777
function enmascarar(cadeaNum) {
  let ultimas4Cifras = cadeaNum.slice(-4);
  let enmascarada = ultimas4Cifras.padStart(cadeaNum.length, '*');
  return enmascarada;
}
console.log(enmascarar('1234123412347777')); // ************7777

// EXERCICIOS NUMBER
// 1. ¿Como calcularías o número de cifras dun número enteiro positivo utilizando
// propiedades e métodos dos obxectos vistos ata agora?
let numero = 401;
let cifras = numero.toString().length;
console.log(cifras);

//EXERCICIOS MATH
// 1. Números aleatorios:
// a. Xera un número enteiro aleatorio entre 0 e 3 (incluídos).
console.log(Math.floor(Math.random() * 4));
// b. Xera un número enteiro aleatorio entre 1 e 3 (incluídos).
console.log(Math.floor(Math.random() * 3) + 1);
// c. Crea unha función que devolva un número aleatorio entre os dous valores pasados como parámetros. Así, por exemplo,
// a seguinte instrución debe mostrar un número aleatorio entre 5 e 10 (incluídos): console.log(numeroAleatorio(5, 10));
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(numeroAleatorio(5, 10));

// 2. Crea unha función á que se lle pase como parámetro o número de minutos e
// devolva un string indicando a súa equivalencia en horas e minutos.
function convertirMinutos(minutos) {
  let horas = Math.floor(minutos / 60);
  let minutosRestantes = minutos % 60;
  return `${horas} horas y ${minutosRestantes} minutos`;
}
console.log(convertirMinutos(401));

// 3. Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra
// función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o
// resultado das funcións usando dúas cifras decimais.
function calcularArea(radio) {
  return (Math.PI * Math.pow(radio, 2)).toFixed(2);
}
function calcularPerimetro(radio) {
  return (2 * Math.PI * radio).toFixed(2);
}
let radio = 4;
console.log(`Área: ${calcularArea(radio)} m²`);
console.log(`Perímetro: ${calcularPerimetro(radio)} m`);

//EJERCICIOS DATE
// 1. Mostra o día da semana (en letra) do 25 de xullo do ano actual.
const fecha = new Date(new Date().getFullYear(), 6, 25);
const diasSemana = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
];
console.log(diasSemana[fecha.getDay()]);

// 2. Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de
// días dese mes.
function diasDelMes(mes, año) {
  return new Date(año, mes, 0).getDate(); // 0 en el día da el último día del mes
}
console.log(diasDelMes(2, 2024));

// 3. Crea unha función á que se lle pase unha data e que devolva true se é fin de
// semana.
function finSemana(fecha) {
  let dia = fecha.getDay;
  if (dia === 0 || dia === 6) {
    return true;
  } else {
    return false;
  }
}
console.log(finSemana(new Date()));

// 4. Crea unha función que reciba unha data como parámetro e devolva o número de
// días que pasaron dende que comezou o ano.
function diasPasaron(fecha) {
  let inicioAno = new Date(fecha.getFullYear(), 0, 1);
  let diferencia = fecha - inicioAno;
  let diasDiferencia = Math.floor(diferencia / 1000 / 60 / 60 / 24); // de milisegundos a días
  return diasDiferencia;
}
console.log(diasPasaron(new Date()));
