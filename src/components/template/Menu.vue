<template>
  <nav class="menu">
    <ul>
      <RouterLink to="/" tag="li" active-class="active" exact>
        <a>Início</a>
      </RouterLink>

      <RouterLink to="/usuario/1" tag="li" active-class="active">
        <a>Usuário 1</a>
      </RouterLink>

      <RouterLink to="/usuario/2" tag="li" active-class="active">
        <a>Usuário 2</a>
      </RouterLink>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
