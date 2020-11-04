<template>
  <div class="user">
    <tr>
      <td>aa</td>
    </tr>
    <!-- <tr v-for="(user, index) in listUser" :key="user.id">
      <td>{{ index + 1 }}</td>
      <td>{{ user.Username }}</td>
      <td><button>Edit</button></td>
      <td><button @click="deleteUser(user.id)">Delete</button></td>
    </tr> -->
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
