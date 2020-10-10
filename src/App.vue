<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Firebase from "@/firebase";
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    logout() {
      Firebase.logOut();
    },
  },
};
</script>
