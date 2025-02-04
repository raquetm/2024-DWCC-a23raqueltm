// Importar la librería Leaflet para manejar mapas
import L from 'leaflet';

// Función para iniciar y mostrar el mapa
export function iniciarMapa() {
  // Verificar si el navegador soporta geolocalización
  if ('geolocation' in navigator) {
    // Obtener la ubicación del usuario
    navigator.geolocation.getCurrentPosition(
      (posicion) => {
        // Extraer la latitud y longitud de la posición obtenida
        const { latitude, longitude } = posicion.coords;

        // Crear el mapa y centrarlo en la ubicación del usuario con un zoom de 15
        const map = L.map('map').setView([latitude, longitude], 15);

        // Añadir una capa de OpenStreetMap como fondo del mapa
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        // Añadir un marcador en la ubicación del usuario
        L.circleMarker([latitude, longitude], {
          radius: 20,
          color: ' rgb(219, 101, 160)',
          fillColor: ' rgb(219, 101, 160)',
        })
          .addTo(map) // Agregar el marcador al mapa
          .bindPopup('<p>Estás aquí ʕ·͡ᴥ·ʔ</p>') // Añadir un mensaje al marcador
          .openPopup(); // Abrir automáticamente el mensaje

        // Añadir un control de descripción en la esquina inferior izquierda
        let legend = L.control({ position: 'bottomleft' });

        // Definir el contenido del control de descripción
        legend.onAdd = function (map) {
          var div = L.DomUtil.create('div', 'legend');
          div.innerHTML = '<p><b>Mapita Leaflet ૮ • ﻌ - ა</b></p>';
          return div;
        };

        // Añadir el control de descripción al mapa
        legend.addTo(map);

        // Función para manejar los clics en el mapa
        function onMapClick(e) {
          let popup = L.popup()
            .setLatLng(e.latlng)
            .setContent(
              '<p><b>lon:</b> ' +
                e.latlng.lng +
                '<br>' +
                '<b>lat:</b> ' +
                e.latlng.lat +
                '</p>'
            )
            .openOn(map);
        }

        // Registrar el evento de clic en el mapa
        map.on('click', onMapClick);
      },
      (error) => {
        // Manejo de errores en caso de que la geolocalización falle
        console.error(`ERROR(${error.code}): ${error.message}`);
      }
    );
  } else {
    // Mensaje de error si el navegador no soporta geolocalización
    console.error('Ubicación no disponible (╥﹏╥)');
  }
}

// Asegurar que el mapa se cargue cuando el DOM esté completamente listo
document.addEventListener('DOMContentLoaded', iniciarMapa);
