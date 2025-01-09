'use estrict';
// Implementa unha función escribirNumeros(desde, ata) que xere un número cada
// segundo, comezando en “desde” e rematando en “ata”. Fai dúas variantes da
// función: unha usando setInterval e outra usando setTimeout

// function escribirNumeros(desde, ata) {
//   setInterval(
//     () => {
//       if (desde <= ata) {
//         console.log(desde);
//         desde++;
//       }
//     },
//     1000,
//     desde,
//     ata
//   );
// }

//CORRECCIÓN:
function escribirNumeros(desde, ata) {
  let timerID = setInterval(() => {
    console.log(desde);
    if (desde == ata) clearInterval(timerID);
    else desde++;
  }, 1000);
}
// console.log(escribirNumeros(1, 3)); //DESCOMENTAR PARA COMPROBAR

function escribirNumerosTimeout(desde, ata) {
  let numero = desde;
  setTimeout(function ImprimirNum() {
    console.log(numero);
    if (numero < ata) {
      setTimeout(ImprimirNum, 1000);
      numero++, 1000;
    }
  }, 1000);
}
//console.log(escribirNumerosTimeout(7, 10)); //DESCOMENTAR PARA COMPROBAR
