'use strict';

// Crea unha función que reciba un parámetro e devolva unha promesa.
//
//      a. Se o parámetro non é un número, debe rexeitar a promesa inmediatamente e
//      devolver unha mensaxe indicando que “Erro. O parámetro non é un número”.
//
//      b. Se o parámetro é un número impar, debe resolver a promesa despois de 1
//      segundo e devolver “impar”.
//
//      c. Se o parámetro é un número par, debe rexeitar a promesa despois de 2
//      segundos e devolver “par”.

function job(parametro) {
  return new Promise(function (resolve, reject) {
    if (isNaN(parametro)) {
      reject('Erro. O parámetro non é un número');
    } else if (parametro % 2 != 0) {
      setTimeout(() => {
        resolve('impar');
      }, 1000);
    } else {
      setTimeout(() => {
        reject('par');
      }, 2000);
    }
  });
}
let promise = job(8);
promise
  .then((respuesta) => console.log(respuesta))
  .catch((erro) => console.log(erro));
