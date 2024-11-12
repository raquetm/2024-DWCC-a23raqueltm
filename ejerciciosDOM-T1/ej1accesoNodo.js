'use estrict';
// 1. Con el código fuente 01-accesoNodos01.html, indica una forma de acceder a los siguientes nodos usando métodos de acceso:
//          La tabla con id="age-table".
console.log('A táboa con id=age-table');
console.log(document.getElementById('age-table'));
//          Todos los elementos label dentro de la tabla (debería haber 3).
console.log('Todos os elementos label dentro da táboa (debería haber 3)');
console.log(document.getElementsByName('age'));
//          La primera celda (td) de la tabla.
console.log('O primeiro td da táboa.');
console.log(document.querySelector('td'));
//          El formulario con name="search".
console.log('O formulario con name=search');
let nomeSearch = document.getElementsByName('search');
console.log(nomeSearch[0]);
//          El primer input del formulario anterior.
console.log('O primeiro input do formulario anterior.');
console.log(document.querySelector('form > label > input'));
console.log(nomeSearch[0].querySelector('input'));
//          El último input del formulario anterior.
console.log('O último input do formulario do apartado anterior.');
console.log(document.querySelector('form > input'));
