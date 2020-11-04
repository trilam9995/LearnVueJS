<template>
  <table class="listUser">
    <tr>
      <th>No.</th>
      <th>Username</th>
      <th colspan="2">Action</th>
    </tr>
    <tr v-for="(user, index) in listUser" :key="user.id">
      <td>{{ index + 1 }}</td>
      <td>{{ user.Username }}</td>
      <td><button>Edit</button></td>
      <td><button @click="deleteUser(user.id)">Delete</button></td>
    </tr>
  </table>
</template>

<script>
import CommonService from "../../services/common-services";
import User from "../user";

export default {
  name: "list-user",
  data() {
    return {
      listUser: [],
    };
  },
  methods: {
    getAllUsers() {
      CommonService.getAll()
        .then((response) => {
          this.listUser = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteUser(id) {
      CommonService.delete(id)
        .then((response) => {
          this.getAllUsers();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  created() {
    this.getAllUsers();
  },
};
</script>

<style scoped>
.listUser {
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
}

.listUser,
td,
th {
  border: 1px solid black;
  padding: 16px;
}

.listUser,
th {
  background: #22cee2;
  color: #fff;
}

.listUser,
td {
  background: #fff;
  color: #000;
}
</style>
