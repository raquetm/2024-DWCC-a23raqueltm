'use estrict';
//EXERCICIOS STRINGS:
// 1. Dada a seguinte constante, fai as operacións necesarias para que o primeiro
// carácter estea en maiúscula:
const cadea = 'desenvolvemento web';
let novaCadea = cadea.replace('d', 'D');
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
