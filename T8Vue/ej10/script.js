// Crea unha páxina web que teña un taboleiro con dúas celas. Define unha clase CSS
// que vai ser usada para aplicar estilos ás celas. Por exemplo, crea unha clase
// chamada “activa” e configúraa cunha cor de fondo e un borde diferentes dos
// establecidos por defecto. Fai que ao pulsar sobre cada cela se alterne o estilo, é
// dicir, que se engada a clase CSS activa se non estaba asignada e viceversa.

// Fai unha segunda versión do mesmo exercicio, pero esta vez só unha das celas
// pode ter a clase CSS “activa”. Configura a páxina para que ao pulsar sobre a cela
// que non ten a clase “activa” se lle engada e se elimine da outra cela.

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
