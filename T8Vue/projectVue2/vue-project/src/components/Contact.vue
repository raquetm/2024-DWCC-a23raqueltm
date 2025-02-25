<script>
export default {
  props: {
    nome: String,
    telefono: Number,
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
#boton {
  background-color: rgb(255, 213, 122);
  color: black;
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}
h3 {
  margin: 10px;
  /* margin-left: 0%; */
}
p {
  margin: 5px;
}
</style>
