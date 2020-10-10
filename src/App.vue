<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-bottom-navigation background-color="black" dark shift>
      <v-btn>
        <span>Video</span>
        <v-icon>mdi-television-play</v-icon>
      </v-btn>

      <v-btn>
        <span>Music</span>

        <v-icon>mdi-music-note</v-icon>
      </v-btn>

      <v-btn>
        <span>Book</span>

        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn>
        <span>Image</span>

        <v-icon>mdi-image</v-icon>
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
