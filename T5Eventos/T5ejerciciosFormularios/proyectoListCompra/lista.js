// Seleccionamos los elementos del DOM necesarios para la funcionalidad de la lista.
const itemInput = document.getElementById('itemInput'); // Campo de texto donde el usuario escribe un nuevo elemento.
const addButton = document.getElementById('addButton'); // Botón para añadir o actualizar un elemento.
const shoppingList = document.getElementById('shoppingList'); // Lista donde se mostrarán los elementos.
const clearAllButton = document.getElementById('clearAllButton'); // Botón para eliminar todos los elementos.
const filterInput = document.getElementById('filterInput'); // Campo de texto para filtrar los elementos.

let editingItem = null; // Variable para almacenar el elemento que está siendo editado actualmente.

// Carga los elementos almacenados en LocalStorage al iniciar la página.
document.addEventListener('DOMContentLoaded', loadItems);

// Guardar el texto del campo de entrada en LocalStorage cada vez que cambie.
itemInput.addEventListener('input', () => {
  localStorage.setItem('currentInput', itemInput.value); // Guarda el valor actual del campo.
});

// Función para cargar los elementos desde LocalStorage y mostrarlos en la lista.
function loadItems() {
  const items = JSON.parse(localStorage.getItem('shoppingList')) || []; // Obtiene la lista desde LocalStorage o inicializa como un array vacío.
  items.forEach(addItemToList); // Agrega cada elemento de la lista almacenada al DOM.
  toggleClearAllButton(); // Actualiza la visibilidad del botón "Borrar todo".
}

// Función para agregar un elemento a la lista visual en el DOM.
function addItemToList(itemText) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${itemText}</span> <!-- Contenido del elemento. -->
    <button class="delete">[X]</button> <!-- Botón para eliminar este elemento. -->
  `;

  // Evento para manejar la edición de un elemento al hacer clic en él.
  li.addEventListener('click', () => {
    editingItem = li;
    itemInput.value = li.querySelector('span').textContent; // Copia su texto al campo de entrada.
    addButton.textContent = 'Actualizar'; // Cambia el texto del botón a "Actualizar".
    shoppingList
      .querySelectorAll('li')
      .forEach((el) => el.classList.remove('active'));
    li.classList.add('active');
  });

  // Evento para eliminar este elemento al hacer clic en el botón "[X]".
  li.querySelector('.delete').addEventListener('click', (e) => {
    e.stopPropagation();
    if (confirm('¿Eliminar este elemento?')) {
      li.remove(); // Elimina el elemento del DOM.
      saveItems(); // Guarda los cambios en LocalStorage.
      toggleClearAllButton(); // Actualiza la visibilidad del botón "Borrar todo".
    }
  });

  shoppingList.appendChild(li); // Agrega el nuevo <li> a la lista.
}

// Función para añadir un nuevo elemento o actualizar uno existente.
function addOrUpdateItem() {
  const newItemText = itemInput.value.trim(); // Obtiene el texto del campo de entrada, eliminando espacios extra.
  if (!newItemText) {
    alert('El campo está vacío.');
    return;
  }

  // Verifica si el texto ya existe en la lista.
  const existingItem = Array.from(shoppingList.children).find(
    (li) =>
      li.querySelector('span').textContent.toLowerCase() ===
      newItemText.toLowerCase()
  );

  if (existingItem && existingItem !== editingItem) {
    alert('Este elemento ya está en la lista.');
    return;
  }

  if (editingItem) {
    // Si estamos editando un elemento, lo actualizamos.
    editingItem.querySelector('span').textContent = newItemText;
    editingItem.classList.remove('active'); // Quita la clase 'active' al editar.
    editingItem = null;
    addButton.textContent = 'Añadir'; // Cambia el texto del botón a "Añadir".
  } else {
    // Si no estamos editando, añadimos un nuevo elemento a la lista.
    addItemToList(newItemText);
  }

  itemInput.value = ''; // Limpia el campo de entrada.
  saveItems(); // Guarda los cambios en LocalStorage.
  toggleClearAllButton(); // Actualiza la visibilidad del botón "Borrar todo".
}

// Función para guardar los elementos actuales en LocalStorage.
function saveItems() {
  const items = Array.from(shoppingList.children).map(
    (li) => li.querySelector('span').textContent // Extrae el texto de cada elemento.
  );
  localStorage.setItem('shoppingList', JSON.stringify(items)); // Guarda la lista como un array JSON en LocalStorage.
}

// Función para mostrar u ocultar el botón "Borrar todo".
function toggleClearAllButton() {
  clearAllButton.style.display = shoppingList.children.length
    ? 'block' // Muestra el botón si hay elementos en la lista.
    : 'none'; // Oculta el botón si la lista está vacía.
}

// Función para eliminar todos los elementos de la lista.
function clearAllItems() {
  if (confirm('¿Eliminar todos los elementos?')) {
    shoppingList.innerHTML = ''; // Limpia el contenido de la lista en el DOM.
    saveItems(); // Guarda los cambios en LocalStorage.
    toggleClearAllButton(); // Actualiza la visibilidad del botón "Borrar todo".
  }
}
// Función para filtrar los elementos de la lista.
function filterItems() {
  const filterText = filterInput.value.toLowerCase(); // Convierte el texto del filtro a minúsculas.
  Array.from(shoppingList.children).forEach((li) => {
    // Selecciona el texto desde el <span> dentro del <li>.
    const itemText = li.querySelector('span').textContent.toLowerCase();
    // Muestra u oculta el elemento según si incluye el texto del filtro.
    li.style.display = itemText.includes(filterText) ? '' : 'none';
  });
}

// Agrega los manejadores de eventos para los botones y el filtro.
addButton.addEventListener('click', addOrUpdateItem); // Añadir o actualizar un elemento.
clearAllButton.addEventListener('click', clearAllItems); // Borrar todos los elementos.
// Agrega el manejador de eventos para el campo de filtro.
filterInput.addEventListener('input', filterItems); // Filtrar los elementos mientras se escribe.
