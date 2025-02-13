// Crea unha páxina web con dúas caixas de texto para introducir números. A páxina
// web debe facer a suma dos dous números introducidos e mostrar o resultado. Cada
// vez que se modifique unha das caixas de texto, debe actualizarse e mostrarse o
// resultado da suma dos dous números. Ademais, unha vez obtido o resultado da
// suma, debe mostrarse tamén na páxina web información indicando se o resultado é
// un número par ou impar.

const { createApp } = Vue;

createApp({
    data() {
        return {
            num1: 0,
            num2: 0,
            suma: 0,
            parOuImpar: 'par'
        };
    },
    watch: {
        num1: 'calcularSuma',
        num2: 'calcularSuma'
    },
    methods: {
        calcularSuma() {
            this.suma = this.num1 + this.num2;
            this.parOuImpar = this.suma % 2 === 0 ? 'par' : 'impar';
        }
    }
}).mount('#app');

