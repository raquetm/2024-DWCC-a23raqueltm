// Crea unha páxina web que mostre unha lista de elementos (escolle ti o significado),
// coas seguintes funcionalidades:
//    a. Deben mostrarse os elementos en forma de lista.
//    b. Deben poder engadirse novos elementos á lista.
//    c. Deben poder eliminarse elementos da lista.
//    d. Engade tamén un botón para mostrar/ocultar a lista. Fai que o texto deste
//    botón sexa “Mostrar lista” ou “Ocultar lista” dependendo de se a lista é visible ou non.

const { createApp } = Vue;

createApp({
  data() {
    return {
      mostrarLista: true,
      nuevoNombre: '',
      nombrePerro: ['Balto', 'Lola', 'Akira', 'Rex', 'Darko', 'Cata'],
    };
  },
  computed: {
    nombres() {
      return this.nombrePerro;
    },
  },
  methods: {
    addName() {
      if (this.nuevoNombre !== '') {
        this.nombrePerro.push(this.nuevoNombre);
        this.nuevoNombre = '';
      }
    },
    deleteName(index) {
      this.nombrePerro.splice(index, 1);
    },
    toggleList() {
      this.mostrarLista = !this.mostrarLista;
    },
  },
}).mount('#app');
