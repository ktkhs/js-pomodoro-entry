<template>
  <v-app>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <v-main>
      <DoTask />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import DoTask from "./components/DoTask.vue";

export default {
  name: "App",

  components: {
    DoTask,
  },

  data: () => ({
    //
  }),
};
</script>
