// Crea unha páxina web que teña dous parágrafos:

//      a. O primeiro parágrafo ten por defecto unha clase CSS (configúraa coas
//      propiedades que queiras). Configura este parágrafo para que ao pulsar sobre
//      el se quite e se engada a clase CSS alternativamente.

//      b. O segundo parágrafo ten cor de letra verde, por defecto. Configúrao para que
//      ao pulsar sobre el a cor de letra alterne entre o verde e o vermello.

const { createApp } = Vue;

createApp({
  data() {
    return {
      primeiroParagrafoActivo: true,
      verde: true,
    };
  },
  computed: {
    classObjectPrimeiro() {
      return {
        primeiroParagrafoActivo: this.primeiroParagrafoActivo,
      };
    },
    classObjectSegundo() {
      return {
        verde: this.verde,
        vermello: !this.verde,
      };
    },
  },
  methods: {},
}).mount('#app');
