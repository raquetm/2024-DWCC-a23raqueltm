// Crea unha páxina web con dúas caixas de texto que permitan converter valores de
// kilómetros a metros automaticamente. Cada vez que se escriba en calquera das
// dúas caixas de texto, mostraranse automaticamente a unidade equivalente na outra
// caixa.

const { createApp } = Vue;

createApp({
    data() {
        return {
            kilometros: 0,
            metros: 0,
        };
    },
    watch: {
        kilometros() {
            this.metros=this.kilometros*1000
        },
            
        metros(){
            this.kilometros=this.metros/1000

        }
    },
}).mount('#app');
