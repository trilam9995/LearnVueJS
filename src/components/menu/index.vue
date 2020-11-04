<template>
  <div class="menuContainer">
    <nav class="menu">
      <li class="nav-item">
        <router-link to="/list-user" class="nav-link">List User</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/add-user" class="nav-link">Add User</router-link>
      </li>
    </nav>
  </div>
</template>

<script>
export default {
  name: "menu",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menuContainer .menu {
  display: flex;
}

.menu li {
  padding: 16px;
  list-style: none;
}

.menu li a {
  text-decoration: none;
}

.menu .active {
  color: yellow;
  font-weight: 600;
}
</style>
