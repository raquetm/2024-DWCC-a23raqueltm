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
