<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-bottom-navigation background-color="black" dark shift fixed>
      <v-btn to="photo-garally">
        <span>Search</span>

        <v-icon>mdi-image-search</v-icon>
      </v-btn>

      <v-btn>
        <span>Profile</span>

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
  },
};
</script>
