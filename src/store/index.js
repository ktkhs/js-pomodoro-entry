import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    loginUser: null,
    globalErrorMessage: "",
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    updateTask(state, { id, task }) {
      const index = state.tasks.findIndex((t) => t.id === id);
      state.tasks[index] = task;
    },
    deleteTask(state, id) {
      const index = state.tasks.findIndex((t) => t.id === id);
      state.tasks.splice(index, 1); // splice-> 指定したindexから要素を一つ取り除く
    },
    onAuthUserChanged(state, user) {
      state.loginUser = user;
    },
  },
  actions: {
    fetchTasks({ commit }) {
      const unixtime_today = new Date().getTime();
      let tasks = [
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
      tasks.forEach((task) => {
        commit("addTask", task);
      });
    },
    addTaskByName({ commit }, task_name) {
      let task = {};
      task.title = task_name;
      task.id = this.state.tasks.length + 1;
      task.countPomodoro = 0;
      task.dateLimit = new Date().getTime();
      task.createdAt = new Date().getTime();
      commit("addTask", task);
    },
  },
  modules: {},
});
