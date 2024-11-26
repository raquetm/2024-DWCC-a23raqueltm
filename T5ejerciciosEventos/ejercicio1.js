// Selección de elementos
const ligazon = document.getElementById('ligazon');
const adicional = document.getElementById('adicional');

// Agregar evento de clic al enlace
ligazon.addEventListener('click', function (e) {
  e.preventDefault(); // Evita el comportamiento predeterminado del enlace
  adicional.classList.remove('oculto'); // Muestra el contenido del span
  ligazon.style.display = 'none'; // Oculta el enlace
});
