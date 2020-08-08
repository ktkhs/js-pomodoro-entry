<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>TodoList</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-icon>mdi-logout</v-icon>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
