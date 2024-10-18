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
  return Math.PI * radio * radio;
}
function calcularPerimetro(radio) {
  return (2 * Math.PI * radio).toFixed(2);
}
let radio = 4;
console.log(`Área: ${calcularArea(radio)} m²`);
console.log(`Perímetro: ${calcularPerimetro(radio)} m`);

//EJERCICIOS DATE
// 1. Mostra o día da semana (en letra) do 25 de xullo do ano actual.
const fecha = new Date(new Date().getFullYear(), 6, 25); // ('2024-07-25')
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
  return new Date(año, mes, 0).getDate(); // 0 en el día da el último día del mes anterior
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

//EJERCICIOS ARRAYS
// 1. Crea unha función que reciba un elemento e un array como parámetros. A función
// debe devolver un novo array que conteña os índices onde aparece ese elemento no
// array. Exemplo:
//    const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
//    function indices(elemento, arrayElementos) {…}
//    console.log(indices(1, numeros)); // (4) [0, 3, 5, 9]
const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
function indices(elemento, arrayElementos) {
  let resultado = [];
  for (let i = 0; i < arrayElementos.length; i++) {
    if (arrayElementos[i] === elemento) {
      resultado.push(i);
    }
  }
  return resultado;
}
console.log(indices(1, numeros));

// 2. Dado o array froitas (const froitas = ['peras', 'mazás', 'kiwis', 'plátanos',
// 'mandarinas'];) , fai os seguintes apartados co método splice:
const froitas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];
//      a. Elimina as mazás.
froitas.splice(1, 1);
console.log(froitas.join(', '));

//      b. Engade laranxas e sandía detrás dos plátanos,.
froitas.splice(froitas.indexOf('plátanos') + 1, 0, 'laranxas', 'sandía'); //se pone 0 porque no estamos eliminando nada
console.log(froitas.join(', '));

//      c. Quita os kiwis e pon no seu lugar cereixas e nésperas.
froitas.splice(1, 1, 'cereixas', 'nesperas');
console.log(froitas.join(', '));

// 3. Crea unha función á que se lle pase unha frase con varias palabras e devolva a
// mesma frase coa primeira letra de cada palabra en maiúsculas e o resto de letras en
// minúsculas.
function capitalizarFrase(frase) {
  // Dividir a frase en palabras
  let arrayPalabras = frase.split(' ');
  let saida = [];
  for (const palabra of arrayPalabras) {
    saida.push(
      palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    );
  }
  // Devolver a frase capitalizada unindo as palabras de novo
  return saida.join(' ');
}

// Exemplo de uso
let frase = 'balto es el mejor perro del mundo';
let fraseCapitalizada = capitalizarFrase(frase);
console.log(fraseCapitalizada); // 'Balto Es El Mejor Perro Del Mundo'

// 4. Manejo de equipos de jugadores: Imagina que tienes la siguiente información sobre jugadores en un partido de fútbol:
const players = [
  [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
  ],
  [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
  ],
];
// a. Asignar jugadores a dos equipos:
const [equipo1, equipo2] = players;
console.log('Asignar jugadores a dos equipos:');
console.log(equipo1, equipo2);

// b. Asignar el portero a gk y el resto a fieldPlayers:
const [gk, ...fieldPlayers] = equipo1;
console.log('Asignar el portero a gk y el resto a fieldPlayers:');
console.log('gk:' + gk);
console.log('field players:' + fieldPlayers);

// c. Combinar jugadores de ambos equipos:
const allPlayers = [...equipo1, ...equipo2];
console.log('Combinar jugadores de ambos equipos:');
console.log(allPlayers);

// d. Añadir jugadores al equipo 1:
const equipo1Final = [...equipo1, 'Raquel', 'Sam', 'Balto'];
console.log('Añadir jugadores al equipo 1:');
console.log(equipo1Final);

// 5. Convertir a camelCase: Dado un array de nombres de variables con formato "snake_case", conviértelos a camelCase:
function convertirACamelCase(array) {
  // Creamos un array vacío 'nomesCamelCase' para almacenar los resultados convertidos a camelCase
  for (const element of array) {
    let [first, second] = element.toLowerCase().split('_');
    second = second.charAt(0).toUpperCase() + second.slice(1);
    console.log(first + second);
  }
}
// Exemplo de uso
const nomes = ['balto_torres', 'raquel_torres'];
convertirACamelCase(nomes);

// 6. Formatear información de vuelos: Procesa la siguiente cadena de información sobre vuelos y formatea la salida en la consola.
const flightsInfo =
  '_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30';

function getCode(str) {
  return str.slice(0, 3).toUpperCase();
}

for (const flight of flightsInfo.split('+')) {
  // console.log(flight);
  const [type, from, to, time] = flight.split(';');
  //console.log(type);
  const output = `${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(
    to
  )} (${time.replace(': ', 'h')})`;
  console.log(output.padStart(40));
}

// Crea un obxecto chamado television coas propiedades marca, categoría (televisores), unidades (4), prezo (354.99) e un método chamado importe que devolva o prezo total das unidades (unidades x prezo).
const television = {
  marca: 'Sony',
  categoria: 'televisores',
  unidades: 4,
  precio: 354.99,
  importe() {
    return this.unidades * this.precio;
  },
};

console.log(television.importe()); // Devuelve el precio total (unidades * precio)

//EXERCICIOS OBJETOS
// 1. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor: const game = { odds: { team1: 1.33, x: 3.25, team2: 6.5, } }; Utilizando a desestruturación de obxectos crea as seguintes variables:
// team1: debe inicializarse co valor da propiedade team1 do obxecto inicial.
// draw: debe inicializarse co valor da propiedade x do obxecto inicial.
// team2: debe inicializarse co valor da propiedade team2 do obxecto inicial.
const game1 = {
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const { team1, x: draw, team2 } = game1.odds;
console.log(team1, draw, team2); // 1.33, 3.25, 6.5

// 2. Dado o seguinte obxecto: const game = { scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"] };
// Recorre o array game.scored e mostra por pantalla información do xogador que marcou e o número de gol marcado. Exemplo: “Gol 1: Lewandowski”.
// Crea un novo obxecto chamado scorers que conteña como propiedades o nome dos xogadores que marcaron e como valor o número de goles que marcaron respectivamente. Neste exemplo sería algo así: {Lewandowski: 2, Gnarby: 1, Hummels: 1}javascript
const game = {
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
};
// a. Recorrer el array y mostrar los goles:
game.scored.forEach((jugador, index) => {
  console.log(`Gol ${index + 1}: ${jugador}`);
});
// b. Crear el objeto `scorers`:
const scorers = game.scored.reduce((contador, jugador) => {
  contador[jugador] = (contador[jugador] || 0) + 1;
  return contador;
}, {});

console.log(scorers); // { Lewandowski: 2, Gnarby: 1, Hummels: 1 }

// 3. O seguinte mapa almacena información dos eventos ocorridos durante un partido indicando o minuto no que se produciron:
const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
]);
// Crea un novo array chamado eventos que almacene os diferentes eventos (non o minuto) ocorridos durante o partido (sen que haxa duplicados).
// Recorre con un bucle o mapa gameEvents e mostra información de cada evento, indicando se ocorreu na primeira metade ou na segunda metade do partido, por exemplo: [PRIMEIRA PARTE] 17: GOAL.
const eventos = [...new Set(gameEvents.values())];
console.log(eventos); // ['GOAL', 'Substitution', 'Yellow card', 'Red card']

for (const [minuto, evento] of gameEvents) {
  const parte = minuto <= 45 ? 'PRIMERA PARTE' : 'SEGUNDA PARTE';
  console.log(`[${parte}] ${minuto}: ${evento}`);
}
