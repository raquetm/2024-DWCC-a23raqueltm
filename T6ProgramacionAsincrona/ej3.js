'use estrict';
// Busca unha imaxe grande en internet para probar que tarda tempo en descargarse.
// Carga esa imaxe remota dende JavaScript. Cando a imaxe estea cargada, mostra
// unha mensaxe en consola.
// Se fas varias probas coa mesma imaxe, a primeira vez descargarase. Sen
// embargo, a segunda vez que se cargue a imaxe, esta xa estará en caché.

// URL dunha imaxe grande
const imageURL = 'cyr.jpg';

// Crear un obxecto Image
const img = new Image();

// Engadir evento para cando a imaxe estea cargada
img.onload = () => {
  console.log('A imaxe cargouse correctamente.');

  // Engadir a imaxe ao corpo da páxina
  document.getElementById('image-container').appendChild(img);
};

// Engadir evento para erros na carga
img.onerror = () => {
  console.error('Erro ao cargar a imaxe.');
};

// Establecer o atributo src para comezar a descarga
console.log('Iniciando a descarga da imaxe...');
img.src = imageURL;
