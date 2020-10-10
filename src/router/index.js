import Vue from "vue";
import VueRouter from "vue-router";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import Tasklist from "../views/Tasklist.vue";
import Twitter from "../views/Twitter.vue";
import PhotoGarally from "../views/PhotoGarally.vue";
import PhotoDetail from "../views/PhotoDetail.vue";
//import Firebase from "@/firebase";
//import store from "@/store";

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
    meta: { requiresAuth: true },
  },
  {
    path: "/photo-garally",
    name: "PhotoGarally",
    component: PhotoGarally,
  },
  {
    path: "/photo-detail",
    name: "PhotoDetail",
    component: PhotoDetail,
  },
  {
    path: "/twitter-posts",
    name: "Twitter",
    component: Twitter,
  },
  {
    path: "/",
    redirect: "/tasks",
  },
  {
    path: "*",
    redirect: "/signin",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//router.beforeResolve((to, from, next) => {
//  Firebase.onAuth();
//  let currentUserStatus = store.getters["isSignedIn"];
//  let requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//  if (!requiresAuth) {
//    next();
//  } else if (requiresAuth && !currentUserStatus) {
//    next("/signin");
//  } else if (requiresAuth && currentUserStatus) {
//    next();
//  }
//});

export default router;
