<template>
<div class="contact">
    <h2>{{ nome }}</h2>
    <button id="boton" @click="toggleDetails">{{ showDetails ? 'Ocultar' : 'Mostrar' }} detalles</button>
    <div v-if="showDetails">
      <p>Teléfono: {{ telefono }}</p>
      <p>Email: {{ email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        nome: 'Raquel',
        telefono: '666666666',
        email: 'a23raqueltm@iessanclemente.net',
        showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style scoped>
.contact {
  background-color: rgb(250, 231, 244);
  border: solid rgb(102, 6, 86) 1px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>