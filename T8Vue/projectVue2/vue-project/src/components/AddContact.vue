<script>
export default {
  data() {
    return {
      nome: '',
      telefono: '',
      email: '',
    };
  },
  methods: {
    addContact() {
      this.$emit('add-contact', {
        nome: this.nome,
        telefono: this.telefono,
        email: this.email,
        favorito: false,
      });
      this.nome = '';
      this.telefono = '';
      this.email = '';
    },
  },
};
</script>

<template>
  <div class="add-contact">
    <h3>Engadir novo contacto</h3>
    <form @submit.prevent="addContact">
      <div>
        <label for="nome">Nome:</label>
        <input type="text" v-model="nome" required />
      </div>
      <div>
        <label for="telefono">Teléfono:</label>
        <input type="text" v-model="telefono" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <button type="submit">Engadir</button>
    </form>
  </div>
</template>

<style scoped>
.add-contact {
  background-color: rgb(250, 231, 244);
  border: none;
  padding: 10px;
  margin: 10px;
  height: auto;
  width: 250px;
  border-radius: 5px;
}
form div {
  margin-bottom: 10px;
  margin: 5px;
}
form input {
  width: 60%;
  padding: 5px;
  margin-left: 5px;
  border-radius: 5px;
  border: 1px solid rgb(99, 48, 88);
}
button {
  background-color: rgb(255, 213, 122);
  color: rgb(99, 48, 88);
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
}
</style>
