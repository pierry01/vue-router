<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr />
    <button sucesso @click="irParaInicio">Início</button>
  </div>
</template>

<script>
export default {
  methods: {
    irParaInicio() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>
