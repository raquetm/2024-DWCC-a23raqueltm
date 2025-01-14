'use strict';

// Crea unha función á que se lle pase un parámetro e que devolva unha promesa. A
// promesa debe resolverse despois de tres segundos dende que se chamou á función
// e debe devolver o parámetro pasado á función.
// Para probala, fai unha chamada á túa función e mostra por consola o que devolve.
function job(parametro) {
  return new Promise(function (resolve, reject) {
    resolve(parametro);
  });
}
let promise = job('soy un parámetro');
promise.then((respuesta) => console.log(respuesta));
