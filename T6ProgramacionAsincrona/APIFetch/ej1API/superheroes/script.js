'use strict';

// Descarga os ficheiros heroes.hml e style.css. Utilizando API Fetch crea o
// código necesario para descargar a información dos superheroes en formato JSON e
// construír unha páxina coma a da seguinte imaxe:

// --ver pdf--

// Dentro da cabeceira irá a información do nome do equipo, cidade e ano de creación:

// <header>
//      <h1><!-- squadName --></h1>
//      <p>Hometown: <!-- homeTown --> // Formed: <!-- formed --></p>
// </header>

// Dentro de <section> irá un <article> para cada membro (observar que hai un array
// de membros) co seguinte formato:

// <article>
//      <h2><!-- name --></h2>
//      <p>Secret identity: <!-- secretIdentity --></p>
//      <p>Age: <!-- age --></p>
//      <p>Superpowers:</p>
//      <ul>
//          <li><!-- powers[0] --></li>
//          <li><!-- powers[1] --></li>
//          <li><!-- powers[2] --></li>
//      </ul>
// </article>

// Fai que o código HTML se cree de forma dinámica coa información recibida do
// ficheiro JSON.
const promesa = fetch(
  'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
);

promesa
  .then((response) => {
    //console.log(response);
    return response.json();
  })
  //.then((datos) => console.log(datos));
  .then((datos) => superheroes(datos));

function superheroes(data) {
  const header = document.querySelector('header');
  const squadName = document.createElement('h1');
  squadName.textContent = data.squadName;

  const details = document.createElement('p');
  details.textContent = `Hometown: ${data.homeTown} // Formed: ${data.formed}`;

  header.appendChild(squadName);
  header.appendChild(details);

  const section = document.querySelector('section');
  data.members.forEach((member) => {
    const article = document.createElement('article');

    const name = document.createElement('h2');
    name.textContent = member.name;

    const secretIdentity = document.createElement('p');
    secretIdentity.textContent = `Secret identity: ${member.secretIdentity}`;

    const age = document.createElement('p');
    age.textContent = `Age: ${member.age}`;

    const powersTitle = document.createElement('p');
    powersTitle.textContent = 'Superpowers:';

    const powersList = document.createElement('ul');
    member.powers.forEach((power) => {
      const listItem = document.createElement('li');
      listItem.textContent = power;
      powersList.appendChild(listItem);
    });

    article.appendChild(name);
    article.appendChild(secretIdentity);
    article.appendChild(age);
    article.appendChild(powersTitle);
    article.appendChild(powersList);

    section.appendChild(article);
  });
}
