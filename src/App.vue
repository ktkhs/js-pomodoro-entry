<template>
  <v-app>
    <v-main>
      <DoTask />
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
