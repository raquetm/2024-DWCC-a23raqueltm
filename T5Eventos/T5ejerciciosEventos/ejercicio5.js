//ejercicio5.js:
const imagen = document.getElementById('imagen');

// Lista de eventos y sus mensajes
const eventos = [
  { tipo: 'click', mensaje: 'Evento: click' },
  { tipo: 'dblclick', mensaje: 'Evento: dblclick' },
  { tipo: 'contextmenu', mensaje: 'clic derecho' },
  { tipo: 'mousedown', mensaje: 'pulsar botón del ratón' },
  { tipo: 'mouseup', mensaje: 'soltar botón del ratón' },
  { tipo: 'wheel', mensaje: 'scroll con la rueda del ratón' },
  { tipo: 'mouseover', mensaje: 'ratón entra en la imagen' },
  { tipo: 'mouseout', mensaje: 'ratón sale de la imagen' },
  { tipo: 'dragstart', mensaje: 'iniciar arrastre' },
  { tipo: 'drag', mensaje: 'arrastrando' },
  { tipo: 'dragend', mensaje: 'finalizar arrastre' },
];

// Asignar listeners para cada evento
eventos.forEach((evento) => {
  imagen.addEventListener(evento.tipo, () => {
    console.log(evento.mensaje);
  });
});
