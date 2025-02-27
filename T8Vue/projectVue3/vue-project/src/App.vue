<script>
export default {
  data() {
    return {
      nome: 'Raquel',
      anoNacemento: 2001,
    };
  },
};
</script>
<template>
  <!-- Exercicio: Crea unha nova aplicación que teña dous compoñentes descendentes. No compoñente raíz está a información dunha persoa: nome e ano de nacemento.
O primeiro compoñente a crear debe mostrar o nome e ano de nacemento desa persoa. O outro compoñente debe mostrar un formulario cuberto cos datos persoais
desa persoa. Este formulario debe permitir a modificación dos datos, actualizándose o compoñente que os visualiza cando isto suceda.
Configura a validación de props de tal forma que o ano de nacemento sexa un número e sexa obrigatorio. -->

  <h1>{{ nome }}</h1>
  <h2>{{ anoNacemento }}</h2>
</template>
<style></style>
