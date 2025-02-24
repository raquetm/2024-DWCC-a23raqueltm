<template>
  <div class="contact">
    <h2>Nome: {{ nome }}</h2>
    <p>Teléfono: {{ telefono }}</p>
    <p>Email: {{ email }} </p>
</div>
</template>

<script>
export default {
  data() {
    return {
        nome: 'Raquel',
        telefono: '666666666',
        email: 'a23raqueltm@iessanclemente.net',
    };
  },
};
</script>

<style scoped>
.contact {
  background-color: rgb(250, 231, 244);
  border: solid rgb(102, 6, 86) 1px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>