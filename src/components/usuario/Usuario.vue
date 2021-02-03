<template>
  <transition mode="in-out" name="flip">
    <div class="usuario">
      <h2>Usuários</h2>
      <hr />

      <RouterView />

      <button sucesso @click="irParaInicio">Início</button>
    </div>
  </transition>
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
