<template>
  <div>
    <v-text-field
      v-model="inputTaskTitle"
      placeholder="受信箱に保存したいタスクを入力してEnterで保存してください"
      @keyup.enter="submitTask"
    ></v-text-field>
    <template>
      <DoTask ref="dotaskdialog"></DoTask>
      <TaskDetailDialog ref="taskdetaildialog"></TaskDetailDialog>
      <TaskDeleteDialog ref="taskdeletedialog"></TaskDeleteDialog>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">タイトル</th>
              <th class="text-left">期日</th>
              <th class="text-left">作成日</th>
              <th class="text-left">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in $store.state.tasks" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ convertDateToString(item.dateLimit) }}</td>
              <td>{{ convertDateToString(item.createdAt) }}</td>
              <td>
                <v-icon @click="openTaskDetailDialog(item)">mdi-pencil</v-icon>
                <v-icon @click="openDoTaskDialog">mdi-play</v-icon>
                <v-icon @click="openTaskDeleteDialog(item)">mdi-delete</v-icon>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import DoTask from "@/components/DoTask.vue";
import TaskDetailDialog from "@/components/TaskDetailDialog.vue";
import TaskDeleteDialog from "@/components/TaskDeleteDialog.vue";
export default {
  components: {
    DoTask,
    TaskDetailDialog,
    TaskDeleteDialog,
  },
  created() {
    this.fetchTasks();
  },
  data() {
    return {
      inputTaskTitle: "",
    };
  },
  methods: {
    ...mapActions(["fetchTasks", "addTaskByName"]),
    convertDateToString(unixtime) {
      let dateTime = new Date(unixtime);
      return dateTime.toLocaleDateString();
    },
    openDoTaskDialog() {
      this.$refs.dotaskdialog.openDialog();
    },
    openTaskDetailDialog(task) {
      this.$refs.taskdetaildialog.openDialog(task);
    },
    submitTask() {
      this.addTaskByName(this.inputTaskTitle);
      this.inputTaskTitle = "";
    },
    openTaskDeleteDialog(task) {
      this.$refs.taskdeletedialog.openDialog(task);
    },
  },
};
</script>
