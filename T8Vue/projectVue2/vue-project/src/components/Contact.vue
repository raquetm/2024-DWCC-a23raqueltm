<script>
export default {
  props: {
    nome: String,
    telefono: String,
    email: String,
    favorito: Boolean,
  },
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite');
    },
    deleteContact() {
      this.$emit('delete-contact');
    },
  },
};
</script>

<template>
  <div class="contact">
    <h3>{{ nome }}</h3>
    <button id="boton" @click="toggleDetails">
      {{ showDetails ? 'Ocultar' : 'Mostrar' }} detalles
    </button>
    <div v-if="showDetails">
      <p>Teléfono: {{ telefono }}</p>
      <p>Email: {{ email }}</p>
    </div>
    <button id="favorito" @click="toggleFavorite">
      {{ favorito ? '★' : '☆' }}
    </button>
    <button id="eliminar" @click="deleteContact">Eliminar</button>
  </div>
</template>

<style>
.contact {
  background-color: rgb(250, 231, 244);
  border: none;
  padding: 10px;
  margin: 10px;
  height: auto;
  width: 250px;
  border-radius: 5px;
}
#eliminar {
  background-color: rgb(99, 48, 88);
  color: rgb(255, 255, 255);
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
}
#boton {
  background-color: rgb(255, 213, 122);
  color: rgb(99, 48, 88);
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
}
#favorito {
  background-color: rgb(255, 255, 255);
  color: rgb(99, 48, 88);
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
}
h3 {
  margin: 10px;
  /* margin-left: 0%; */
  color: rgb(99, 48, 88);
}
p {
  margin: 5px;
  color: rgb(99, 48, 88);
}
</style>
