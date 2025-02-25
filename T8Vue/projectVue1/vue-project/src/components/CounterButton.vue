<template>
  <div>
    <button id="boton" @click="incrementCount">Fixeches click aquí {{ count }} veces</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
  },
};
</script>

<style scoped>
#boton {
  background-color: rgb(102, 6, 86);
  color: white;
  font-weight: bold;
  border: solid rgb(102, 6, 86) 1px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>