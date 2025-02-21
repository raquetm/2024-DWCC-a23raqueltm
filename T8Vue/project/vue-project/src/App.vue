<script>
export default {
  data() {
    return {
      message: 'Ola mundo!',
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
      this.message += '!';
    },
  },
};
</script>
<template>
  <h1>{{ message }}</h1>
  <button @click="count++">You clicked me {{ count }} times.</button><br />
  <button @click="toggleCase">Toggle Case</button><br />
  <button @click="addExclamation">Add "!"</button><br />
  <FoodItem />
  <FoodItem />
</template>
<style>
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>
