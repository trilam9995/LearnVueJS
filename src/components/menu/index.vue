<template>
  <div class="menuContainer">
    <nav class="menu">
      <li
        class="nav-item"
        v-for="menu in menuArray"
        v-bind:key="menu.path"
        v-bind:class="{ active: activeIndex === menu.id }"
        @click="setActive(menu.id)"
      >
        <router-link :to="menu.path" class="nav-link">{{
          menu.name
        }}</router-link>
      </li>
    </nav>
  </div>
</template>

<script>
export default {
  name: "menu",
  data() {
    return {
      activeIndex: 1,
      menuArray: [
        {
          id: 1,
          path: "list-user",
          name: "List User",
        },
        {
          id: 2,
          path: "/add-user",
          name: "Add User",
        },
      ],
    };
  },
  methods: {
    setActive(id) {
      this.activeIndex = id;
    },
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

.menu .active a {
  color: yellow;
  font-weight: 600;
}
</style>
