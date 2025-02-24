<script>
import CounterButton from './components/CounterButton.vue';
import Contact from './components/Contact.vue';
export default {
  components: {
    CounterButton,
    Contact,
  },
  data() {
    return {
      message: 'no puedo más',
      count: 0,
    };
  },
  methods: {
    toggleCase() {
      this.message =
        this.message === this.message.toUpperCase()
          ? this.message.toLowerCase()
          : this.message.toUpperCase();
    },
    addExclamation() {
      this.message += '(╥﹏╥)';
    },
  },
};
</script>
<template>
  <h1>{{ message }}</h1>

<!-- Exercicio 1: Crea un proxecto Vue onde o compoñente raíz da aplicación teña unha propiedade que sexa unha mensaxe de texto, por exemplo “ola mundo”. Configura o código
HTML para mostrar a mensaxe. Engade ao HTML un botón de tal forma que cada vez que se pulse transforme a mensaxe de minúscula a maiúscula ou viceversa.
Engade outro botón que permita engadir un carácter, por exemplo “!” á mensaxe de texto. -->
  <button id="boton" @click="toggleCase">Maiúscula/Minúscula</button><br />
  <button id="boton" @click="addExclamation">Engade "(╥﹏╥)"</button><br />

<!-- Exercicio 2: Crea un proxecto Vue con un compoñente a reutilizar que conteña unha propiedade que almacene o número de veces que se pulsou nun botón. Engade ao compoñente
un botón que incremente o contador anterior en unha unidade cada vez que se pulse. O texto que aparece no botón debe informar do número de veces se pulsou.
Engade no compoñente raíz da aplicación 3 instancias do compoñente anterior. ¿O valor do contador é compartido polos compoñentes? -->
  <CounterButton />
  <CounterButton />
  <CounterButton />
<br>  

<!-- Exercicio 3: Crea un proxecto Vue para mostrar unha lista de contactos. A información dos contactos debe estar nun compoñente separado (Contact) no que se debe gardar a
información dunha persoa: nome, teléfono e correo electrónico, como mínimo. De momento, inicializa manualmente os datos persoais dunha soa persoa no compoñente Contact. -->
<Contact />
<br>
<button id="boton" @click="count++">Fixeches click aquí {{ count }} veces</button><br />

  <FoodItem />
  <FoodItem />
</template>
<style>
#boton {
  background-color: rgb(250, 231, 244);
  border: solid rgb(102, 6, 86) 1px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
#app > div {
  border: dashed rgb(102, 6, 86) 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: rgb(247, 187, 229);
}
</style>
