<script>
import Contact from './components/Contact.vue';
import AddContact from './components/AddContact.vue';
export default {
  components: {
    Contact,
    AddContact,
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
    addContact(contact) {
      this.contacts.push(contact);
    },
    deleteContact(index) {
      this.contacts.splice(index, 1);
    },
  },
};
</script>

<template>
  <!-- Exercicio 1: Modifica o exercicio do listado de contactos do apartado anterior para que o array de persoas estea definido no compoñente pai e se pase a información 
ao compoñente fillo utilizando props. No compoñente raíz da aplicación debes crear un array con dúas persoas mínimo indicando o nome, teléfono e correo electrónico.
Crea unha aplicación que mostre a información dos contactos utilizando o compoñente Contact. Implementa a validacion de props -->

  <!-- Exercicio 2: Engade ao exercicio anterior información de se un contacto é favorito ou non. Esta información almacénase no array do compoñente raíz e pásase ao 
compoñente Contact como prop. Mostra visualmente se é un contacto favorito ou non. Podes utilizar texto ou imaxes, como se mostra a continuacion.
Engade tamén ao compoñente descendente a funcionalidade que permita modificar se un compoñente é favorito ou non. Fai que visualmente se actualice a información
de se é ou non favorito. De momento non se explicou como cambiar este dato no compoñente ascendente. -->

  <!-- Exercicio 3: Modifica o exercicio do listado de persoas para engadir a funcionalidade de “Cambiar favorito”. Configura un botón no compoñente descendente que 
permita modificar se unha persoa é favorita ou non, de tal forma que a información se actualice no compoñente ascendente. -->

  <h2>LISTADO DE CONTACTOS</h2>
  <Contact
    v-for="(contact, index) in contacts"
    :key="index"
    :nome="contact.nome"
    :telefono="contact.telefono"
    :email="contact.email"
    :favorito="contact.favorito"
    @toggle-favorite="toggleFavorite(index)"
    @delete-contact="deleteContact(index)"
  />
  <AddContact @add-contact="addContact" />
  <!-- Exercicio 4: Amplía a aplicación do exercicio anterior coas seguintes funcionalidades:
        a. Engade un novo compoñente que conteña un formulario para dar de alta un novo contacto. Engade este novo compoñente ao compoñente raíz da
        aplicación e fai a implementación necesaria para que ao dar de alta un novo contacto, se engada á lista de contactos do compoñente raíz.
        
        b. No compoñente que visualiza os datos de cada persoa (Contact) engade un botón que permita eliminar ese contacto. O contacto debe borrarse do array
        do compoñente raíz da aplicación. -->
</template>

<style>
body {
  background-color: rgb(63, 26, 55);
  color: rgb(99, 48, 88);
  margin: 0;
  padding: 0;
}
h2 {
  color: white;
  font-size: 20px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  border-radius: 5px;
}
</style>
