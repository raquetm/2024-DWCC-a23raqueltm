'use strict';

// Utilizando a API https://jsonplaceholder.typicode.com/ crea unha páxina web que
// permita xestionar as tarefas (https://jsonplaceholder.typicode.com/todos).
// A API contén información falsa de 200 tarefas. Para este exercicio vaise traballar só
// as 10 primeiras (https://jsonplaceholder.typicode.com/todos?_limit=10).
// A páxina web a crear debe permitir crear, ler, actualizar e borrar tarefas, polo que se
// deberán facer as peticións apropiadas ao servidor, aínda que realmente non se vaia
// modificar a base de datos, senón que se simularán as operacións para practicar.
// A páxina será capaz de mostrar a información modificada mentres non se recargue.
// Unha vez se recargue, mostrará a información almacenada no servidor.
// Inicialmente, cando a páxina se cargue por primeira vez, mostraranse os títulos das
// 10 primeiras tarefas.

// Utilizando estilos CSS, deben mostrarse de forma diferente as tarefas completadas
// das que aínda non o están.
// Ademais, a páxina, debe ofrecer a seguinte funcionalidade:
//
//      ● Un formulario para engadir tarefas. Ao enviar o formulario, realizarase unha
//      petición POST ao servidor simulando a creación dunha nova tarefa. O
//      servidor devolverá a información da nova creada, que se engadirá á páxina
//      web xunto co resto de tarefas.
//
//      ● A páxina debe permitir modificar unha tarefa de completada a non
//      completada e viceversa. Debe facerse a solicitude de modificación ao
//      servidor, indicando o id da tarefa a modificar.
//
//      ● A páxina web debe permitir eliminar tarefas. Neste caso tamén debe facerse
//      a solicitude ao servidor.
//
// Consultar a guía da API onde se exemplifica como xestionar os posts. Neste
// exercicio faranse as operacións equivalentes, mais con tarefas (todos).

function createFetch() {
  const promesa = fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

  promesa
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    //.then((datos) => console.log(datos));
    .then((datos) => cargarTarefas(datos));
}

function cargarTarefas(json) {}
