<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <p><strong>Código: </strong>{{ id }}</p>

    <RouterLink
      tag="button"
      primario
      :to="{
        name: 'editarUsuario',
        params: { id: id },
        query: { completo: true, lingua: 'pt-BR' },
        hash: '#rodape',
      }"
    >
      Editar
    </RouterLink>
  </div>
</template>

<script>
export default {
  props: ["id"],

  beforeRouteEnter(to, from, next) {
    // Componente ainda não criado
    // eslint-disable-next-line
    console.log("Dentro do componente -> USUÁRIO DETALHE");

    const autenticado = true;
    autenticado ? next() : next(false);
  },
};
</script>

<style>
</style>
