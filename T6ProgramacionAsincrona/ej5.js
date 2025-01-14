'use strict';

// Descarga os ficheiros heroes.hml e style.css. Utilizando XMLHttpRequest crea o
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

// URL do ficheiro JSON
const jsonURL = 'superheroes.json'; // Cambia a URL se o ficheiro JSON está noutro lugar

// Crear unha instancia de XMLHttpRequest
const xhr = new XMLHttpRequest();

// Configurar a solicitude
xhr.open('GET', jsonURL, true);
xhr.responseType = 'json';

// Enviar a solicitude
xhr.send();

// Procesar a resposta cando se cargue
xhr.addEventListener('load', function () {
  if (xhr.status === 200) {
    const data = xhr.response; // Obxecto JSON recibido

    // Crear o contido do encabezado
    const header = document.querySelector('header');
    const squadName = document.createElement('h1');
    squadName.textContent = data.squadName;

    const details = document.createElement('p');
    details.textContent = `Hometown: ${data.homeTown} // Formed: ${data.formed}`;

    header.appendChild(squadName);
    header.appendChild(details);

    // Crear os artigos para cada membro
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
  } else {
    console.error('Erro ao cargar o ficheiro JSON.');
  }
});

xhr.addEventListener('error', function () {
  console.error('Erro de conexión.');
});
