<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr />
    <p><strong>Código: </strong>{{ id }}</p>
    <button sucesso @click="irParaInicio">Início</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    irParaInicio() {
      this.$router.push("/");
    },
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    },
  },
};
</script>

<style>
</style>
