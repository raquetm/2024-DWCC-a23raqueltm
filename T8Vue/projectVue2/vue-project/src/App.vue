<script>
import Contact from './components/Contact.vue';
export default {
  components: {
    Contact,
  },
  data() {
    return {
      contacts: [
        {
          nome: 'Raquel',
          telefono: '666666666',
          email: 'a23raqueltm@iessanclemente.net',
          favorito: false,
        },
        {
          nome: 'Christian',
          telefono: '777777777',
          email: 'christian@example.com',
          favorito: true,
        },
        {
          nome: 'Balto',
          telefono: '888888888',
          email: 'balto@example.com',
          favorito: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(index) {
      this.contacts[index].favorito = !this.contacts[index].favorito;
    },
  },
};
</script>
<template>
  <!-- Exercicio 1: Modifica o exercicio do listado de contactos do apartado anterior para que o array de persoas estea definido no compoñente pai e se pase a información 
ao compoñente fillo utilizando props. No compoñente raíz da aplicación debes crear un array con dúas persoas mínimo indicando o nome, teléfono e correo electrónico.
Crea unha aplicación que mostre a información dos contactos utilizando o compoñente Contact. Implementa a validacion de props -->
  <h2>Listado de contactos</h2>
  <Contact
    v-for="contact in contacts"
    :nome="contact.nome"
    :telefono="contact.telefono"
    :email="contact.email"
  ></Contact>

  <!-- Exercicio 2: Engade ao exercicio anterior información de se un contacto é favorito ou non. Esta información almacénase no array do compoñente raíz e pásase ao 
compoñente Contact como prop. Mostra visualmente se é un contacto favorito ou non. Podes utilizar texto ou imaxes, como se mostra a continuacion.
Engade tamén ao compoñente descendente a funcionalidade que permita modificar se un compoñente é favorito ou non. Fai que visualmente se actualice a información
de se é ou non favorito. De momento non se explicou como cambiar este dato no compoñente ascendente. -->
</template>
<style></style>
