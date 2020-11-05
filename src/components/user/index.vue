<template>
  <tr class="user">
    <td>{{ index + 1 }}</td>
    <td>{{ user.Username }}</td>
    <td><button>Edit</button></td>
    <td><button @click="deleteUser(user.id)">Delete</button></td>
  </tr>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  props: {
    index: Number,
    user: Object,
  },
};
</script>

<style scoped>
.user td {
  background: #fff;
  color: #000;
  border: 1px solid black;
  padding: 16px;
}
</style>
