'use estrict';
// Descarga el código fuente 03-propiedadesNodo02.html y muestra por consola:
// Contar el número de enlaces en la página
const links = document.querySelectorAll('a');
console.log(links.length);

// Obtener la URL de la penúltima enlace
console.log(links[links.length - 2].href);

// Contar el número de enlaces que apuntan a "http://proba"
const probaLinks = Array.from(links).filter(
  (link) => link.href === 'http://proba'
);
console.log(probaLinks.length);

// Contar el número de enlaces en el tercer párrafo
const thirdParagraph = document.querySelectorAll('p')[2];
const thirdParagraphLinks = thirdParagraph.querySelectorAll('a');
console.log(thirdParagraphLinks.length);

// Cambiar el color de texto a naranja de los enlaces que apuntan a "http://proba"
probaLinks.forEach((link) => {
  link.style.color = 'orange';
});
