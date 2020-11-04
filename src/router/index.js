import Vue from "vue";
import Router from "vue-router";
import ListUser from "@/components/list-user";
import AddUser from "@/components/add-user";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: ListUser
    },
    {
      path: "/list-user",
      name: "ListUser",
      component: ListUser
    },
    {
      path: "/add-user",
      name: "AddUser",
      component: AddUser
    }
  ]
});
