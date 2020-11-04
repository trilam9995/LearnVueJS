<template>
  <div id="app">
    <Menu />
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import Menu from "./components/menu";
export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
