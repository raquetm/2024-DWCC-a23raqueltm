// Crea unha páxina web onde se mostre:
//      a. o teu nome
//      b. o ano actual
//      c. usando unha expresión, suma 5 ao ano actual.
//      d. unha imaxe (pode utilizarse o atributo src ou mostrala como HTML puro)
//      e. unha caixa de texto que conteña como texto o teu nome.
//      f. un contador inicializado a 0
//      g. Dous botóns: un para incrementar nunha unidade o contador e outro para decrementalo.
// A información debe estar almacenada nun compoñente Vue e dende HTML debe
// accederse a ela. Con respecto á imaxe, a ruta está almacenada en Vue.

const { createApp } = Vue;

createApp({
  data() {
    return {
      nombre: 'Raquel Torres',
      fecha: new Date().getFullYear(),
      imagen:
        'https://www.veterinariasanjuan.com.ar/wp-content/uploads/que-debe-estar-haciendo-un-gatito-de-2-meses.webp',

      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
}).mount('#app');
