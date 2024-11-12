// Descarga el código fuente 03-propiedadesNodo01.html y indica, por lo menos, una forma de acceder al siguiente contenido y muéstralo por consola:
// Acceder al innerHTML, innerText y textContent de la etiqueta “Escolle sexo”
const sexoLabel = document.querySelector('label:last-of-type');
console.log(sexoLabel.innerHTML);
console.log(sexoLabel.innerText);
console.log(sexoLabel.textContent);

// Obtener el valor del primer input de sexo
const firstSexoInput = document.querySelector('input[name="sexo"]');
console.log(firstSexoInput.value);

// Obtener el valor del sexo seleccionado
const selectedSexo = document.querySelector('input[name="sexo"]:checked');
console.log(selectedSexo.value);

// Obtener el texto de cada elemento <li>
const listItems = document.querySelectorAll('ul li');
listItems.forEach((li) => console.log(li.innerText));

// Contar el número de elementos <li>
console.log(listItems.length);

// Obtener el valor del atributo data-widget-name
const widget = document.querySelector('div[data-widget-name]');
console.log(widget.getAttribute('data-widget-name'));
