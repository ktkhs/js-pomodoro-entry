<template>
  <v-dialog v-model="isDisplay">
    <v-card>
      <v-card-title class="headline">編集</v-card-title>

      <v-card-text>
        <v-text-field
          v-model="task.title"
          label="タイトル"
          filled
          required
        ></v-text-field>
        <!-- https://konprogrammer.hatenablog.com/entry/2019/12/23/201408 -->
        <v-menu v-model="menu" max-width="290px" min-width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field
              slot="activator"
              v-model="limitDate"
              label="期日"
              filled
              readonly
              v-on="on"
            />
          </template>
          <v-date-picker v-model="limitDate" />
        </v-menu>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="isDisplay = false"
          >cancel</v-btn
        >
        <v-btn color="green darken-1" text @click="submit">Update</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isDisplay: false,
      menu: false,
      task: {
        title: "",
        dateLimit: new Date().getTime(),
      },
    };
  },
  methods: {
    ...mapActions(["updateTask"]),
    openDialog(task) {
      this.task = JSON.parse(JSON.stringify(task));
      this.isDisplay = true;
    },
    submit() {
      this.updateTask({ id: this.task.id, task: this.task });
      console.log("submit edit task");
      this.isDisplay = false;
    },
  },
  computed: {
    limitDate: {
      get: function() {
        let limitDate = new Date(this.task.dateLimit);
        return limitDate.toISOString().substr(0, 10);
      },
      set: function(val) {
        this.task.dateLimit = new Date(val).getTime();
      },
    },
  },
};
</script>
