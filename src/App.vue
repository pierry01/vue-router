<template>
  <div id="app">
    <h1>Rotas com Vue Router</h1>

    <RouterView name="menu" />

    <transition mode="out-in" name="flip">
      <RouterView />
    </transition>

    <RouterView name="menuInferior" />
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
