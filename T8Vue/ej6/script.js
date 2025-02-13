// Crea un formulario con, polo menos, unha caixa de texto, un área de texto, múltiples
// checkboxes, radiobuttons e select. Fai que o valor seleccionado en cada un dos
// campos se mostre en HTML.
// Engade un botón para resetear o formulario, de forma que os valores
// escritos/seleccionados se borren.

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: '',
      multilineMessage: '',
      checked: [], 
      picked: '', 
      selected: '',
    };
  },
  methods: {
    resetForm() {
      this.message = '';
      this.multilineMessage = '';
      this.checked = [];
      this.picked = '';
      this.selected = '';
    },
  },
}).mount('#app');

