'use strict';

// 1. ¿Son iguais os seguintes fragmentos de código? ¿Que pasa se se produce un erro
// en f1?
promise.then(f1).catch(f2); //se ejecuta f2
promise.then(f1, f2); //solo se muestra el error

// 2. ¿Cal é a saída do seguinte código? ¿Por que?
function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}
let promise1 = job();
promise1
  .then(() => console.log('Success 1'))
  .then(() => console.log('Success 2'))
  .then(() => console.log('Success 3'))
  .catch(() => console.log('Error 1')) //esta es la salida porque la promesa se rejecta
  .then(() => console.log('Success 4')); //al ejecutarse el catch, este devuelve una promesa y da esta salida

// 3. ¿Cal é o resultado do seguinte código? ¿Por que?
let promise2 = new Promise(function (resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});
promise2.then(console.log); //se imprime 1 porque la promesa solo se puede resolver una vez

// 4. ¿Cal é a saída do seguinte código? ¿Por que?
function job1(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve('success');
    } else {
      reject('error');
    }
  });
}
let promise3 = job1(true);
promise3
  .then(function (data) {
    console.log(data);
    return job1(false);
  })
  .catch(function (error) {
    console.log(error);
    return 'Error caught';
  })
  .then(function (data) {
    console.log(data);
    return job1(true);
  })
  .catch((error) => console.log(error));
//la salida es success, error y Error caught
