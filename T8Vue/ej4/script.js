// Crea unha páxina web que conteña unha caixa de texto e un parágrafo
// sincronizados. É dicir, o parágrafo debe mostrar o mesmo contido que a caixa de
// texto e debe actualizarse a medida que se engaden novas letras. Podes usar o
// evento input.

const { createApp } = Vue;

createApp({
  data() {
    return {
      texto: '',
    };
  },
  methods: {
    actualizarTexto(evento) {
      this.texto = evento.target.value;
    },
  },
}).mount('#app');
