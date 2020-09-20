<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>TodoList</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-icon @click="logout">mdi-logout</v-icon>
      </v-toolbar-items>
    </v-app-bar>

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
