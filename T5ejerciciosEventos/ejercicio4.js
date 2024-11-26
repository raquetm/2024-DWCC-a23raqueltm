// ejercicio4.js:
// Selección de elementos
const menuHeader = document.getElementById('header');
const menuOptions = document.getElementById('options');

// Alternar el menú al hacer clic
menuHeader.addEventListener('click', () => {
  if (menuOptions.style.display === 'none') {
    menuOptions.style.display = 'block'; // Mostrar menú
  } else {
    menuOptions.style.display = 'none'; // Colapsar menú
  }
});
