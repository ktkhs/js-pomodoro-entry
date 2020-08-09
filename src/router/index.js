import Vue from "vue";
import VueRouter from "vue-router";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import Tasklist from "../views/Tasklist.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/tasks",
    name: "Tasklist",
    component: Tasklist,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
