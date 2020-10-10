<template>
  <v-dialog v-model="dialog" max-width="290">
    <v-card>
      <v-card-title class="headline">検索詳細</v-card-title>

      <v-card-text>
        test
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="dialog = false"
          >Cancel</v-btn
        >
        <v-btn color="green darken-1" text @click="sarch">Searh</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      task: {
        title: "",
      },
    };
  },
  methods: {
    openDialog(task) {
      this.task = JSON.parse(JSON.stringify(task));
      this.dialog = true;
    },
    search() {
      this.dialog = false;
    },
  },
};
</script>
