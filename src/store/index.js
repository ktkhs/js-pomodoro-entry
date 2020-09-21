import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    loginUser: null,
    errorMessage: "",
    successMessage: "",
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    updateTask(state, { id, task }) {
      const index = state.tasks.findIndex((t) => t.id === id);
      Vue.set(state.tasks, index, task);
    },
    deleteTask(state, id) {
      const index = state.tasks.findIndex((t) => t.id === id);
      state.tasks.splice(index, 1); // splice-> 指定したindexから要素を一つ取り除く
    },
    onAuthUserChanged(state, user) {
      state.loginUser = user;
    },
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
    setSuccessMessage(state, message) {
      state.successMessage = message;
    },
  },
  actions: {
    fetchTasks({ getters, commit }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/tasks`)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              let task = doc.data();
              task.id = doc.id;
              commit("addTask", task);
            });
          });
      }
    },
    addTaskByName({ getters, commit }, task_name) {
      let task = {};
      task.title = task_name;
      task.countPomodoro = 0;
      task.dateLimit = new Date().getTime();
      task.createdAt = new Date().getTime();
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/tasks`)
          .add(task)
          .then((doc) => {
            task.id = doc.id;
            commit("addTask", task);
          });
      }
    },
    updateTask({ getters, commit }, { id, task }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/tasks`)
          .doc(id)
          .update(task)
          .then(() => {
            commit("updateTask", { id, task });
          });
      }
    },
    deleteTask({ getters, commit }, id) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/tasks/`)
          .doc(id)
          .delete()
          .then(() => {
            commit("deleteTask", id);
          });
      }
    },
  },
  modules: {},
  getters: {
    isSignedIn: (state) => (state.loginUser ? true : false),
    uid: (state) => (state.loginUser ? state.loginUser.uid : null),
  },
});
