<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr />
    <RouterView />
    <button sucesso @click="irParaInicio">Início</button>
  </div>
</template>

<script>
export default {
  methods: {
    irParaInicio() {
      this.$router.push({
        name: "inicio",
      });
    },
  },
};
</script>

<style>
</style>
