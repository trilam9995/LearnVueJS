<template>
  <form class="addUser">
    <div class="field">
      <label>Username</label>
      <input type="text" v-model="Username" />
    </div>
    <button @click="saveUser">Save</button>
  </form>
</template>

<script>
import CommonService from "../../services/common-services";

export default {
  name: "add-user",
  data() {
    return {
      Username: "",
    };
  },
  methods: {
    saveUser(e) {
      e.preventDefault();

      CommonService.create({ Username: this.Username })
        .then((response) => {
          console.log("success");
        })
        .catch((e) => {
          console.log(e);
        });

      this.Username = "";
    },
  },
};
</script>

<style scoped>
.addUser {
  margin-top: 2rem;
}

.field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.field label {
  font-size: 0.9em;
  font-weight: 600;
}

.addUser button {
  margin: 1rem 0 0 7rem;
}
</style>
