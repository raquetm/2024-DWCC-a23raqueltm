'use estrict';
// 1. Crea unha variable que almacene un día da semana de luns a domingo. En función
// do valor da variable mostra unha mensaxe indicando se o día é laborable ou non.
let diaSemana = 'viernes';
if ((diaSemana = 'sábado') || (diaSemana = 'domingo')) {
  console.log('Hoy no es un día laborable');
} else {
  console.log('Hoy es un día laborable');
}

// 2. Crea 3 variables e inicialízaas con 3 números diferentes. Mostra por pantalla o maior
// dos 3 números.
let num1 = 12;
let num2 = 20;
let num3 = 3;
if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2);
} else {
  console.log(num3);
}

// 3. Escribe os números pares do 0 ao 30, incluídos.
for (let number = 0; number < 30; number++) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

// 4. Escribe as potencias de 2, dende 2⁰ ata 2^20. Para cada potencia debe saír un texto
// similar a “2 elevado a 0 = 1”.
for (let potencia = 0; potencia <= 20; potencia++) {
  console.log('2 elevado a ' + potencia + ' = ' + 2 ** potencia);
}

// 5. Inicializa unha variable a un número, calcula o seu factorial e mostra a resultado por
// consola. (5! = 5*4*3*2*1).
let numero = 5;
let factorial = 1;
for (let i = 1; i <= numero; i++) {
  factorial *= i;
}

// 6. Cálculo do IMC (índice de masa corporal). IMC = peso (kg) / [estatura (m)]2
//      a. Almacena en variables o peso e altura de dúas persoas.
//      b. Calcula o IMC das dúas persoas.
//      c. Indica que persoa ten o maior IMC cunha cadea similar a: 'O IMC (25.3) da
//      primeira persoa é maior que o da segunda persoa (22.5)!'
let peso1 = 67;
let altura1 = 1.8;
let peso2 = 75;
let altura2 = 1.8;

let imc1 = peso1 / altura1 ** 2;
let imc2 = peso2 / altura2 ** 2;

if (imc1 > imc2) {
  console.log(
    'O IMC (' +
      imc1 +
      ') da primeira persoa é maior que o da segunda persoa (' +
      imc2 +
      ')!'
  );
} else if (imc2 > imc1) {
  console.log(
    'O IMC (' +
      imc2 +
      ') da segunda persoa é maior que o da primeira persoa (' +
      imc1 +
      ')!'
  );
} else {
  console.log('As dúas persoas teñen o mesmo IMC: (' + imc1 + ')');
}

//EJERCICIO FUNCIONES:
//Crea unha función que reciba como parámetro un prezo e unha porcentaxe de
// desconto. A función debe calcular o prezo final aplicado o desconto e devolver este valor.
function descontar(prezo, desconto) {
  let prezoDesconto = prezo - prezo * (desconto / 100);
  console.log(
    'El descuento es del: ' +
      desconto +
      '% y el precio inicial es ' +
      prezo +
      '$. Tiene que pagar: ' +
      prezoDesconto +
      '$'
  );
}
let prezo1 = 20;
let desconto1 = 10;
descontar(prezo1, desconto1);
