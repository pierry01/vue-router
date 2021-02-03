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
      }"
    >
      Editar
    </RouterLink>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style>
</style>