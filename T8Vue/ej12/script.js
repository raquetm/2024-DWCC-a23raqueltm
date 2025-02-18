// Dado un array de números almacenado en JavaScript, utiliza a directiva v-for para
// mostrar só os números pares.

const { createApp } = Vue;

createApp({
  data() {
    return {
      numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  computed: {
    numerosPares() {
      return this.numeros.filter(numero => numero % 2 === 0);
    },
  },
}).mount('#app');
