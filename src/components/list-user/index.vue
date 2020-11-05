<template>
  <table class="listUser">
    <tr>
      <th>No.</th>
      <th>Username</th>
      <th colspan="2">Action</th>
    </tr>
    <User
      v-for="(user, index) in listUser"
      :key="user.id"
      v-bind:index="index"
      v-bind:user="user"
    />
  </table>
</template>

<script>
import CommonService from "../../services/common-services";
import User from "../user";

export default {
  name: "list-user",
  components: {
    User,
  },
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
</style>
