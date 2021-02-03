<template>
  <nav class="menu">
    <ul>
      <RouterLink to="/" tag="li" active-class="active" exact>
        <a>Início</a>
      </RouterLink>

      <RouterLink to="/usuario" tag="li" active-class="active">
        <a>Usuário</a>
      </RouterLink>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
