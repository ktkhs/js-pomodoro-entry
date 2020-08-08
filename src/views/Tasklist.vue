<template>
  <div>
    <h1>Tasklist</h1>
    <template>
      <DoTask ref="dotaskdialog"></DoTask>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">タイトル</th>
              <th class="text-left">期日</th>
              <th class="text-left">作成日</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tasks" :key="item.id" @click="openDoTaskDialog">
              <td>{{ item.title }}</td>
              <td>{{ convertDateToString( item.dateLimit ) }}</td>
              <td>{{ convertDateToString( item.createdAt ) }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </template>
  </div>
</template>

<script>
import DoTask from "@/components/DoTask.vue";

export default {
  components: {
    DoTask,
  },
  created() {
    const unixtime_today = new Date().getTime();
    this.tasks = [
      {
        id: 1,
        title: "スーパーに買い出しに行く",
        dateLimit: unixtime_today,
        countPomodoro: 0,
        createdAt: unixtime_today,
      },
      {
        id: 2,
        title: "カレーを作る",
        dateLimit: unixtime_today,
        countPomodoro: 0,
        createdAt: unixtime_today,
      },
    ];
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    convertDateToString(unixtime) {
      let dateTime = new Date(unixtime);
      return dateTime.toLocaleDateString();
    },
    openDoTaskDialog() {
      this.$refs.dotaskdialog.openDialog();
    },
  },
};
</script>