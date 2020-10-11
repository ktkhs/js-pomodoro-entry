<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-bottom-navigation dark fixed>
      <v-btn to="/photo-garally">
        <span>garally</span>
        <v-icon>mdi-image-search</v-icon>
      </v-btn>

      <v-btn @click="moveProfile">
        <span>MyProfile</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-bottom-navigation>
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
    moveProfile() {
      this.$router.push({ name: "PhotoDetail", params: { userId: "bem" } });
    },
  },
};
</script>
