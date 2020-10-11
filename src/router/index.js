import Vue from "vue";
import VueRouter from "vue-router";
import Signin from "../views/Signin.vue";
import Twitter from "../views/Twitter.vue";
import PhotoGarally from "../views/PhotoGarally.vue";
import PhotoDetail from "../views/PhotoDetail.vue";
import Firebase from "@/firebase";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/photo-garally",
    name: "PhotoGarally",
    component: PhotoGarally,
    //meta: { requiresAuth: true },
  },
  {
    path: "/photo-detail/:userId",
    name: "PhotoDetail",
    component: PhotoDetail,
    //meta: { requiresAuth: true },
  },
  {
    path: "/twitter-posts",
    name: "Twitter",
    component: Twitter,
  },
  {
    path: "/",
    redirect: "/photo-garally",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  Firebase.onAuth();
  let currentUserStatus = store.getters["isSignedIn"];
  let requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (!requiresAuth) {
    next();
  } else if (requiresAuth && !currentUserStatus) {
    next("/signin");
  } else if (requiresAuth && currentUserStatus) {
    next();
  }
});

export default router;
