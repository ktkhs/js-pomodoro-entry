<template>
  <v-dialog v-model="dialog" max-width="290">
    <v-card>
      <v-card-title class="headline">タスク削除</v-card-title>

      <v-card-text>「{{ task.title }}」を削除しますか？</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="dialog = false"
          >Cancel</v-btn
        >
        <v-btn color="green darken-1" text @click="deleteConfirm">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
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
    ...mapActions(["deleteTask"]),
    openDialog(task) {
      this.task = JSON.parse(JSON.stringify(task));
      this.dialog = true;
    },
    deleteConfirm() {
      this.deleteTask(this.task.id);
      this.dialog = false;
    },
  },
};
</script>
