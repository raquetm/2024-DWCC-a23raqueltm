'use strict';

// Utilizando API Fetch, descarga o ficheiro JSON con información sobre gatas
// e a súa descendencia e crea unha páxina web onde se mostre a información recibida.
// Debes mostrar o nome das gatas separados por comas. Antes do último nome debe
// ir a conxunción “e” e ao final un punto. O texto debe quedar así: “Os nomes das
// gatas son Lindy, Mina e Antonia.”.
// Ademais, debes mostrar información do número de gatiños, indicando cantos deles
// son femias e cantos machos: “Hai 8 gatiños: 5 femias e 3 machos.”
const promesa = fetch(
  'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json'
);

promesa
  .then((response) => {
    //console.log(response);
    return response.json();
  })
  //.then((datos) => console.log(datos));
  .then((datos) => definirGatiños(datos));

function definirGatiños(data) {
  const catNames = data.map((cat) => cat.name);
  const lastCatName = catNames.pop();
  const catSentence = `Os nomes das gatas son ${catNames.join(
    ', '
  )} e ${lastCatName}.`;

  let totalKittens = 0;
  let femaleKittens = 0;
  let maleKittens = 0;

  data.forEach((cat) => {
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
}
