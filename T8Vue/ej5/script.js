// 1. Crea unha páxina web cos seguintes elementos:

//          a. Un botón que mostre unha mensaxe por consola ao ser pulsado co botón do
//          medio.

//          b. Unha caixa de texto onde ao pulsar calquera tecla se mostre o texto actual
//          da caixa nun parágrafo da mesma páxina HTML.
//          Observar que se se usa o evento keydown prodúcese un atraso nun carácter,
//          pois o evento lánzase ao pulsar a tecla e o valor da caixa de texto
//          actualízase cando se solta a tecla (o evento keydown xa rematou).

//          c. Unha caixa de texto tal que ao pulsar a tecla ENTER se mostre o seu contido
//          nun novo parágrafo da páxina HTML. Ademais, fai que o contido da caixa de
//          texto se borre despois de pulsar ENTER.
const { createApp } = Vue;

createApp({
  data() {
    return {
      texto: '',
      nuevoParrafo: '',
    };
  },
  methods: {
    botonMedio() {
      console.log('Me clickaste con el botón del medio!!!');
    },
    creandoTexto(evento) {
      this.texto = evento.target.value;
    },
    crearNuevoParrafo(evento) {
      this.nuevoParrafo = evento.target.value;
      evento.target.value = '';
    },
  },
}).mount('#app');
