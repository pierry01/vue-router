<template>
  <div class="usuario-lista">
    <h3>Lista de Usuários</h3>
    <ul class="lista">
      <RouterLink tag="li" to="/usuario/1" class="item-lista">
        Usuário 1
      </RouterLink>

      <RouterLink tag="li" to="/usuario/2" class="item-lista">
        Usuário 2
      </RouterLink>

      <RouterLink tag="li" to="/usuario/3" class="item-lista">
        Usuário 3
      </RouterLink>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
