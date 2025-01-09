'use estrict';
// 2. Con el código fuente 01-accesoNodos02.html, indica una forma de acceder a los siguientes nodos:
//          El elemento con id="input2".
console.log('O elemento con id input2');
console.log(document.getElementById('input2'));
//          La colección de párrafos.
console.log('A colección de parágrafos');
console.log(document.querySelectorAll('p'));
//          Todos los párrafos dentro del div con id="lipsum".
console.log('Todos os parágrafos dentro do div con id lipsum');
console.log(document.querySelectorAll('#lipsum p'));
//          El formulario.
console.log('O formulario');
console.log(document.querySelector('form'));
//          Todos los elementos input.
console.log('Todos os inputs');
console.log(document.querySelectorAll('input'));
//          Solo los elementos input con name="sexo".
console.log('Só os inputs con nome sexo');
console.log(document.getElementsByName('sexo'));
//          Los elementos de la lista con la clase important.
console.log('Os items da lista con clase important');
console.log(document.querySelectorAll('ul .important'));
