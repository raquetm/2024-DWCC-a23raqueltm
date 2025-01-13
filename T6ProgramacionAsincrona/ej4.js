'use strict';

// Utilizando XMLHttpRequest, descarga o ficheiro JSON con información sobre gatas
// e a súa descendencia e crea unha páxina web onde se mostre a información recibida.
// Debes mostrar o nome das gatas separados por comas. Antes do último nome debe
// ir a conxunción “e” e ao final un punto. O texto debe quedar así: “Os nomes das
// gatas son Lindy, Mina e Antonia.”.
// Ademais, debes mostrar información do número de gatiños, indicando cantos deles
// son femias e cantos machos: “Hai 8 gatiños: 5 femias e 3 machos.”
// URL do JSON
const jsonURL = 'gatas.json'; // Cambia a URL se o ficheiro JSON está noutro lugar

// Crear unha instancia de XMLHttpRequest
const xhr = new XMLHttpRequest();

// Configurar a solicitude
xhr.open('GET', jsonURL, true);
xhr.responseType = 'json'; // Establecer o tipo de resposta

// Enviar a solicitude
xhr.send();

// Engadir un listener para o evento 'load'
xhr.addEventListener('load', function () {
  if (xhr.status === 200) {
    const cats = xhr.response; // Obter o obxecto JSON

    // Procesar os datos
    const catNames = cats.map((cat) => cat.name);
    const lastCatName = catNames.pop(); // Elimina o último nome
    const catSentence = `Os nomes das gatas son ${catNames.join(
      ', '
    )} e ${lastCatName}.`;

    let totalKittens = 0;
    let femaleKittens = 0;
    let maleKittens = 0;

    cats.forEach((cat) => {
      cat.kittens.forEach((kitten) => {
        totalKittens++;
        if (kitten.gender === 'f') {
          femaleKittens++;
        } else if (kitten.gender === 'm') {
          maleKittens++;
        }
      });
    });

    const kittenSentence = `Hai ${totalKittens} gatiños: ${femaleKittens} femias e ${maleKittens} machos.`;

    // Mostrar a información na páxina
    const infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `<p>${catSentence}</p><p>${kittenSentence}</p>`;
  } else {
    console.error(`Erro ao cargar o ficheiro JSON. Estado: ${xhr.status}`);
  }
});

// Engadir un listener para o evento 'error'
xhr.addEventListener('error', function () {
  console.error('Erro de conexión.');
});
