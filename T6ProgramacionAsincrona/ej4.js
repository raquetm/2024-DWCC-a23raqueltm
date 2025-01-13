'use strict';

// Utilizando XMLHttpRequest, descarga o ficheiro JSON con información sobre gatas
// e a súa descendencia e crea unha páxina web onde se mostre a información recibida.
// Debes mostrar o nome das gatas separados por comas. Antes do último nome debe
// ir a conxunción “e” e ao final un punto. O texto debe quedar así: “Os nomes das
// gatas son Lindy, Mina e Antonia.”.
// Ademais, debes mostrar información do número de gatiños, indicando cantos deles
// son femias e cantos machos: “Hai 8 gatiños: 5 femias e 3 machos.”
const jsonURL = 'gatas.json';

const xhr = new XMLHttpRequest();
xhr.open('GET', jsonURL, true);
xhr.send();
